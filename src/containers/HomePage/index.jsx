import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useLocation } from 'react-router-dom'
import { FETCH_DATA } from '../../store/types'
import MovieGrid from '../../components/MovieGrid'
import Pagination from '../../components/Pagination'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const HomePage = () => {
  const { type } = useParams()
  const fetchData = useSelector(state => state.fetchData)
  const dispatch = useDispatch()  
  const query = useQuery()
  const pageQuery = query.get('page')
  // console.log(fetchData)
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
