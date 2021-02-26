import React from 'react'
import Img from '../Img'
import { Progress } from '../Icons'
import s from './MovieCard.module.scss'
import history from '../../history'
import PropTypes from 'prop-types'

const MovieCard = ({ data, className }) => {
  
  const dateFormat = dateStr => {
    return new Date(dateStr).toLocaleDateString('en-gb', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div
      onClick={() => history.push(`/movie/${data.id}`)}
      className={[s.movieCard, className].join(' ')}
      key={data.id}
    >
      <div className={s.poster}>
        <Img
          className={s.image}
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={s.movieTitle}
        />
        <Progress className={s.progress} percentage={data.vote_average * 10} />
      </div>
      <div className={s.description}>
        <div className={s.movieTitle}>{data.original_title}</div>
        <div className={s.movieDate}>{dateFormat(data.release_date)}</div>
      </div>
    </div>
  )
}

MovieCard.propTypes = {
  data: PropTypes.object.isRequired,
  className: PropTypes.string
}

export default MovieCard
