import React from 'react'
import { enableStaticRendering } from 'mobx-react'
import RootStore from '../common/stores/RootStore'

enableStaticRendering(typeof window === 'undefined')

let store: RootStore

type RootStateContextValue = {
  rootStore: RootStore
}

const RootStateContext = React.createContext<RootStateContextValue>(
  {} as RootStateContextValue
)

export const initializeStore = (initialData?: RootStore) => {
  
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

export const RootStateProvider: React.FC<React.PropsWithChildren<{hydrationData?: RootStore}>> = ({
  children,
  hydrationData,
}) => {
  const rootStore = initializeStore(hydrationData)
  return (
    <RootStateContext.Provider value={{ rootStore }}>
      {children}
    </RootStateContext.Provider>
  )
}

export const useRootStore = () => React.useContext(RootStateContext)
