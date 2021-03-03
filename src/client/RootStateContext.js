import React from 'react'
import { enableStaticRendering } from 'mobx-react'
import RootStore from '../common/stores/RootStore'

enableStaticRendering(typeof window === 'undefined')

let store
const RootStateContext = React.createContext({})

export const initializeStore = (initialData) => {

  const hydrate = () => {
    if (initialData) {
      return initialData
    } else {
      return new RootStore(window.__INITIAL_STATE__)
    }
  }

  const _store = store ?? hydrate()
  
  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export const RootStateProvider = ({ children, hydrationData }) => {
  const store = initializeStore(hydrationData)
  return (
    <RootStateContext.Provider value={store}>
      {children}
    </RootStateContext.Provider>
  )
}

export const useRootStore = () => React.useContext(RootStateContext)


