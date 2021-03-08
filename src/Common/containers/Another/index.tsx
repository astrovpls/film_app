import React from 'react'
import { Link } from 'react-router-dom'
// import { useRootStore } from '../../RootStateContext'

const Another: React.FC = () => {
  // const {rootStore} = useRootStore()
  return (
    <>
      <Link to={'/'}>ccc</Link>
      {/* {rootStore.movieStore.items} */}
    </>
  )
}

export default Another
