import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { FETCH_DATA } from '../../store/types'
import MovieGrid from '../../components/MovieGrid'

const HomePage = () => {
  const { type, category, query } = useParams()
  const fetchData = useSelector(state => state.fetchData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: FETCH_DATA.TRIGGER, payload: type || 'popular' })
  }, [])

  if (fetchData.loading === false && fetchData.data.results) {
    return (
      <>
        <MovieGrid results={fetchData.data.results} />
      </>
    )
  } else {
    return <>Loading</>
  }
}

export default HomePage
