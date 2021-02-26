import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './containers/HomePage'
import SearchPage from './containers/SearchPage'
import MoviePage from './containers/MoviePage'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact strict path="/">
            <HomePage />
          </Route>
          <Route exact strict path="/list/:type">
            <HomePage />
          </Route>
          <Route exact strict path="/genre/:category">
            <HomePage />
          </Route>
          <Route exact strict path="/search/:query">
            <HomePage />
          </Route>
          <Route exact strict path="/search">
            <SearchPage />
          </Route>
          <Route path="/movie/:id">
            <MoviePage />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </div>
  )
}

export default App
