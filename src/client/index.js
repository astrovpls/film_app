import '@babel/register'

import React from 'react'
import { RootStateProvider } from './RootStateContext'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from '../common/components/Routes'

const element = document.getElementById('root')

if (element) {
  hydrate(
    <RootStateProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </RootStateProvider>,
    element
  )
}
