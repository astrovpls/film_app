import React, { useEffect, useState } from 'react'
import s from './MoviePage.module.scss'
import Img from '../../components/Img'
import MovieCard from '../../components/MovieCard'
import ScrollContainer from 'react-indiana-drag-scroll'
import { Progress } from '../../components/Icons'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_MOVIE, FETCH_SIMILAR } from '../../store/types'
import { useParams } from 'react-router-dom'

const MoviePage = () => {
  const [accentColor, setColor] = useState()
  const { id } = useParams()
  const fetchMovie = useSelector(state => state.fetchData)
  const fetchSimilar = useSelector(state => state.fetchSimilar)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: FETCH_MOVIE.TRIGGER, payload: { type: id } })
    dispatch({ type: FETCH_SIMILAR.TRIGGER, payload: id })
  }, [dispatch, id])


  const Description = () => {
    const colorValue =
      Array.isArray(accentColor) && accentColor.length
        ? Math.max(...accentColor.map(el => el / 2.55)).toFixed(1)
        : null

    const getTextColor =
      colorValue > 50 ? s['description--dark'] : s['description--light']

    return (
      <div className={[s.description, getTextColor].join(' ')}>
        <div className={s.title}>
          {fetchMovie.data.title}
          <span className={s.date}>
            {' '}
            ({fetchMovie.data.release_date.split('-')[0]})
          </span>
        </div>
        <div className={s.info}>
          <span>{fetchMovie.data.release_date.split('-').join('/')}</span>
          <span>{fetchMovie.data.genres.map(el => el.name).join(', ')}</span>
          <span>{`${(fetchMovie.data.runtime / 60) | 0}h ${
            fetchMovie.data.runtime % 60
          }m`}</span>
        </div>
        <div className={s.score}>
          <Progress percentage={fetchMovie.data.vote_average * 10} />
          <span>Average score</span>
        </div>
        <em>{fetchMovie.data.tagline}</em>
        <div className={s.overview}>
          Overview:
          <div>{fetchMovie.data.overview}</div>
        </div>
      </div>
    )
  }

  if (
    fetchMovie.loading === false &&
    fetchSimilar.loading === false &&
    fetchMovie.data.backdrop_path
  ) {
    return (
      <>
        <header className={s.header}>
          <div className={s.backdrop}>
            <div
              className={s.tint}
              style={{
                background: `linear-gradient(to right, rgba(${accentColor}, 1.00) 20%, rgba(${accentColor}, 0.70) 100%)`,
              }}
            ></div>
            <Img
              className={s.backdropImage}
              src={`https://image.tmdb.org/t/p/w500${fetchMovie.data.backdrop_path}`}
              alt={'backdrop'}
              getColorCallback={setColor}
            />
          </div>
          <Img
            className={s.poster}
            src={`https://image.tmdb.org/t/p/w500${fetchMovie.data.poster_path}`}
            alt={'poster'}
          />
          <Description />
        </header>
        <div className={s.additional}>
          <div className={s.similar}>
            <ScrollContainer vertical={false} >
              <div className={s.similarScroll}>
                {fetchSimilar.data.results.map(el => {
                  return <MovieCard data={el} className={s.movieCard} />
                })}
              </div>
            </ScrollContainer>
          </div>
        </div>
      </>
    )
  } else {
    return <>Loading</>
  }
}

MoviePage.propTypes = {}

export default MoviePage
