import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { useRootStore } from '../../../client/RootStateContext'

const Home = () => {
  const [state, setstate] = useState()

  const rootStore = useRootStore()

  const add = () => {
    rootStore.todoStore.addItem(state)
    setstate('')
  }

  return (
    <>
      <Helmet>
        <title>Home component</title>
      </Helmet>
      <div className="home">
        <div onClick={() => add()} className="home__title">
          Todo List
          <Link to={'/about'}>aaa</Link>
        </div>
        <input
          placeholder="Add the todo and press enter"
          value={state || ''}
          onChange={e => setstate(e.target.value)}
        />
        <div className="home__results">
          {rootStore.todoStore.items.map((item, idx) => (
            <div key={idx}>{item}</div>
          ))}
        </div>
      </div>
    </>
  )
}

Home.serverFetch = { type: 'todoStore', payload: 'server' }

export default Home
