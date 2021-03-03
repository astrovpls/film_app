import React from 'react'
import { Link } from 'react-router-dom'
import { useRootStore } from '../../../client/RootStateContext'

const Another = () => {
  const rootStore = useRootStore()
  return (
    <>
      <Link to={'/'}>aaa</Link>
      {rootStore.todoStore.items}
    </>
  )
}

export default Another
