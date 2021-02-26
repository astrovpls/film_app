import axios from "axios";

const uri = "https://api.themoviedb.org/3/";
const api_key = "b7a83b86f736b14f7650e3702b1fcdbe";

//Get arrays of movies.
export const getData = ({type, page}) =>
  axios.get(`${uri}movie/${type}?api_key=${api_key}&language=en-US${page ? `&page=${page}` : null}`).then(res => res.data);
//Get all categories.
export const getCategories = () =>
  axios.get(`${uri}genre/movie/list?api_key=${api_key}`);
//Get array of movies for genres.
export const getMoviesByGenre = id =>
  axios.get(
    `${uri}discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}`
  );
//Get array of similar movies by id.
export const getSimilarById = id =>
axios.get(
  `${uri}movie/${id}/similar?api_key=${api_key}&language=en-US&page=1`
).then(res => res.data);;
//Get array of movies for search query.
export const getSearchMovie = query =>
  axios.get(
    `${uri}search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`
  );
//Get reviews of a specific movie.
export const getMovieReviews = id =>
  axios.get(
    `${uri}movie/${id}/reviews?api_key=${api_key}&language=en-US&page=1`
  );
//Get array of videos for a specific movie.
export const getMovieVideos = id =>
  axios.get(`${uri}movie/${id}/videos?api_key=${api_key}&language=en-US`);
//Get array of recommendations of a specific movie.
export const getMovieRecommendations = id =>
  axios.get(
    `${uri}movie/${id}/recommendations?api_key=${api_key}&language=en-US&page=1`
  );

  // https://api.themoviedb.org/3/discover/movie?api_key=b7a83b86f736b14f7650e3702b1fcdbe&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=80