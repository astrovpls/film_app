/* @flow */
import fs from 'fs'
import path from 'path'
import React from 'react'
import Helmet from 'react-helmet'
import { renderToString } from 'react-dom/server'
import { RootStateProvider } from '../client/RootStateContext'
import { toJS } from 'mobx'
import { StaticRouter, matchPath } from 'react-router-dom'
import routes from '../common/routes'
import Routes from '../common/components/Routes'
import RootStore from '../common/stores/RootStore'
const express = require('express')
const app = express()

app.use(express.static(path.resolve(__dirname, '../../dist')))

app.get('/*', (req, res) => {
  const helmetData = Helmet.renderStatic()
  res.write(renderView(req, initStore(req), helmetData))
  res.end()
})

app.listen(
  process.env.PORT || 3011,
  console.log.bind(
    this,
    `server listeneing on port ${process.env.PORT || 3011}`
  )
)

const initStore = req => {
  const rootStore = new RootStore()
  const current = routes
    .filter(route => matchPath(req.url, route)) // filter matching paths
    .map(route => route.component)
    .filter(comp => comp.serverFetch)
    .map(comp => comp.serverFetch)[0]
  if (current) rootStore.init(current)
  return rootStore
}

/**
 * SSR (server side rendering)
 *
 * This is an isomorphic app, thus, an app that renders both on the client and the server
 * Three main reasons for SSR:
 * - Better Search Engine Optimization (SEO)
 * - Better performance
 * - Better maintainability
 */
const renderView = (req, rootStore, helmetData) => {
  const indexPath = path.resolve(__dirname, './app.html')
  const indexHtml = fs.readFileSync(indexPath).toString()
  
  const context = {}
  const componentHTML = renderToString(
    <RootStateProvider hydrationData={rootStore}>
      <StaticRouter location={req.url} context={context}>
        <Routes />
      </StaticRouter>
    </RootStateProvider>
  )

  const HTML = indexHtml.replace(
    '<title></title>',
    `${helmetData.title.toString()}${helmetData.meta.toString()}`
  ).replace(
    '<script></script>',
    `<script>
      window.__INITIAL_STATE__ = 
      ${JSON.stringify(toJS(rootStore))};
    </script>`
  ).replace(
    '<div id="root"></div>',
    `<div id="root">${componentHTML}</div>`
  )
  
  return HTML
}