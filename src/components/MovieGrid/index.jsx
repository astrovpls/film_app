import React from 'react'
import PropTypes from 'prop-types'
import s from './MovieGrid.module.scss'
import Img from '../Img'
import { Progress } from '../Icons'
import history from '../../history'

const MovieGrid = ({ results }) => {
  const dateFormat = dateStr => {
    return new Date(dateStr).toLocaleDateString('en-gb', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className={s.movieGrid}>
      {results.map(el => {
        return (
          <div onClick={ () => history.push(`/movie/${el.id}`) } className={s.movieCard} key={el.id}>
            <Img
              className={s.poster}
              src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
              alt={s.movieTitle}
            />
            <Progress className={s.progress}  percentage={el.vote_average*10} />
            <div className={s.description}>
              <div className={s.movieTitle}>{el.original_title}</div>
              <div className={s.movieDate}>{dateFormat(el.release_date)}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

MovieGrid.propTypes = {
  results: PropTypes.array.isRequired,
}

export default MovieGrid
