import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useQuery } from '../../_utils'
import { RootState } from '../../store/reducers'
import { useParams } from 'react-router-dom'
import { FETCH_DATA } from '../../store/types'
import MovieGrid from '../../components/MovieGrid'
import Pagination from '../../components/Pagination'

interface ParamTypes {
  type: string
}

const HomePage = () => {
  const { type } = useParams<ParamTypes>()
  const fetchData = useSelector((state: RootState) => state.fetchData)
  const dispatch = useDispatch()
  const query = useQuery()
  const pageQuery = query.get('page')

  useEffect(() => {
    dispatch({ type: FETCH_DATA.TRIGGER, payload: {type: type || 'popular', page: pageQuery || 1} })
  }, [type, pageQuery, dispatch])

  if (fetchData.loading === false && fetchData.data.results) {
    return (
      <>
        <MovieGrid results={fetchData.data.results} />
        <Pagination
          link={`/list/${type || 'popular'}`}
          current={fetchData.data.page}
          total={fetchData.data.total_pages}
        />
      </>
    )
  } else {
    return <>Loading</>
  }
}

export default HomePage
