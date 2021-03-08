import React, { useEffect } from 'react'
import Helmet from 'react-helmet'
import { IComponent } from '../../types'
import { getData, Services } from '../../stores/services'
import { useRootStore } from '../../RootStateContext'
import MovieGrid from '../../components/MovieGrid'
import Pagination from '../../components/Pagination'
import { useParams } from 'react-router'
import { observer } from 'mobx-react'

interface ParamTypes {
  page: string
}

const defaultQuery = { page: 1 }
const api = (query?: Services) => getData(query || defaultQuery)
const obj = { type: 'movieStore', payload: api }

const Home: IComponent = observer(() => {
  const { page } = useParams<ParamTypes>()
  const { rootStore } = useRootStore()
  const movies = rootStore.movieStore.movies

  useEffect(() => {
    const p = parseInt(page)
    if (movies.page !== p) {
      rootStore.movieStore.fetchData({ page: p })
    }
  }, [page, movies])

  if (Object.keys(movies).length && movies.results.length) {
    return (
      <>
        <Helmet>
          <title>Home component</title>
        </Helmet>
        <MovieGrid results={movies.results} />
        <Pagination
          link={'/'}
          current={movies.page}
          total={movies.total_pages}
        />
      </>
    )
  } else {
    return <>Loading</>
  }
})

Home.serverFetch = obj

export default Home
