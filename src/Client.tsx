import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RootStateProvider } from './Common/RootStateContext'
import App from './Common/App'

const entryBlock = document.getElementById('root')
const renderFunction: ReactDOM.Renderer = entryBlock.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render

renderFunction(
  <RootStateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RootStateProvider>,
  entryBlock
)
