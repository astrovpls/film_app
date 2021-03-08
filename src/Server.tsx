import fs from 'fs'
import express from 'express'
//
import React from 'react'
import { /*renderToNodeStream,*/ renderToString } from 'react-dom/server'
import { StaticRouter, matchPath } from 'react-router-dom'
import Helmet, { HelmetData } from 'react-helmet'
//
import { toJS } from 'mobx'
import RootStore from './Common/stores/RootStore'
//
import App from './Common/App'
import { routesArray } from './Common/routes'
import { Html } from './Html/Server'
import { RootStateProvider } from './Common/RootStateContext'
import { IMovieList } from './Common/stores/services'

const port = 3000
const app = express()
const jsFiles: Array<string> = []
const cssFiles: Array<string> = []

fs.readdirSync('./dist/assets').forEach(file => {
  if (file.split('.').pop() === 'js') jsFiles.push('/assets/' + file)
  if (file.split('.').pop() === 'css') cssFiles.push('/assets/' + file)
})

app.use('/assets', express.static('./dist/assets'))

const initStore = async (req: any) => {
  const rootStore = new RootStore()
  const params = routesArray
  .map(route => matchPath(req.url, route)).find(el => el).params

  const serverFetch = routesArray
    .filter(route => matchPath(req.url, route)) // filter matching paths
    .map(route => route.component)
    .filter(comp => comp.serverFetch)
    .map(comp => comp.serverFetch)

  const promise = serverFetch.map(promise => {
    if (promise.payload) {
      return promise.payload(params)
    }
    return null
  })[0]

  // const promise = serverFetch.map(promise => {
  //   if (promise.payload) {
  //     return new Promise((resolve, reject) => {
  //       promise.payload().then(resolve).catch(resolve)
  //     })
  //   }
  //   return null
  // })[0]

  await Promise.resolve(promise).then((res: IMovieList) => {
    rootStore.init({ type: serverFetch[0]?.type, payload: res })
  })
  return await rootStore
}

const renderView = (
  req: any,
  rootStore: RootStore,
  helmetData?: HelmetData
) => {
  const state = JSON.stringify(toJS(rootStore))
  const children = renderToString(
    <RootStateProvider hydrationData={rootStore}>
      <StaticRouter location={req.url} context={{}}>
        <App />
      </StaticRouter>
    </RootStateProvider>
  )
  return Html({ children, jsFiles, cssFiles, state })
}

app.get('/*', async (req, res) => {
  const helmetData = Helmet.renderStatic()
  res.write(renderView(req, await initStore(req), helmetData))
  res.end()
})

app.listen(port, () => console.log(`Listening on port ${port}`))
