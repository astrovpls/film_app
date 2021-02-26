import axios from 'axios'

const uri = 'https://api.themoviedb.org/3/'
const api_key = 'b7a83b86f736b14f7650e3702b1fcdbe'

export interface IMovieList {
  page: number
  results: IMovie[]
  total_pages: number
  total_results: number
}

export interface IMovie {
  adult: boolean
  backdrop_path: string
  budget: number
  genres: IGenre[]
  homepage: string
  id: number
  title: string
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  runtime: number
  vote_average: number
  tagline: string
}

export interface IGenre {
  id: number
  name: string
}

export interface Services {
  id: string,
  query: string
  type: string
  page: number
}

//Get arrays of movies.
export const getData = ({ type, page }: Services) =>
  axios
    .get<IMovieList>(
      `${uri}movie/${type}?api_key=${api_key}&language=en-US${
        page ? `&page=${page}` : null
      }`
    )
    .then(res => res.data)

//Get all categories.
export const getCategories = () =>
  axios.get(`${uri}genre/movie/list?api_key=${api_key}`)
//Get array of movies for genres.

export const getMoviesByGenre = (id: Services) =>
  axios.get<IMovieList>(
    `${uri}discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
  )
//Get array of similar movies by id.
export const getSimilarById = (id: Services) =>
  axios
    .get<IMovieList>(`${uri}movie/${id}/similar?api_key=${api_key}&language=en-US&page=1`)
    .then(res => res.data)
//Get array of movies for search query.
export const getSearchMovie = (query: Services) =>
  axios.get(
    `${uri}search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`
  )
//Get reviews of a specific movie.
export const getMovieReviews = (id: Services) =>
  axios.get(
    `${uri}movie/${id}/reviews?api_key=${api_key}&language=en-US&page=1`
  )
//Get array of videos for a specific movie.
export const getMovieVideos = (id: Services) =>
  axios.get(`${uri}movie/${id}/videos?api_key=${api_key}&language=en-US`)
//Get array of recommendations of a specific movie.
export const getMovieRecommendations = (id: Services) =>
  axios.get(
    `${uri}movie/${id}/recommendations?api_key=${api_key}&language=en-US&page=1`
  )

// https://api.themoviedb.org/3/discover/movie?api_key=b7a83b86f736b14f7650e3702b1fcdbe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80
