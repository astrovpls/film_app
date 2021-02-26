import React from 'react'
import PropTypes from 'prop-types'
import s from './MovieGrid.module.scss'
import MovieCard from '../MovieCard'

const MovieGrid = ({ results }) => {

  return (
    <div className={s.movieGrid}>
      {results.map(el => {
        return (
          <MovieCard data={el} className={s.movieCard} />
        )
      })}
    </div>
  )
}

MovieGrid.propTypes = {
  results: PropTypes.array.isRequired,
}

export default MovieGrid
