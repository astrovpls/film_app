import React from 'react'
import PropTypes from 'prop-types'
import s from './MovieGrid.module.scss'
import MovieCard from '../MovieCard'
import { IMovie } from '../../store/services'

// TODO specify movie page types
interface Props {
  results: IMovie[],
}

const MovieGrid: React.FC<Props> = ({ results }) => {

  return (
    <div className={s.movieGrid}>
      {results.map(el => {
        return (
          <MovieCard key={el.id} data={el} className={s.movieCard} />
        )
      })}
    </div>
  )
}

export default MovieGrid
