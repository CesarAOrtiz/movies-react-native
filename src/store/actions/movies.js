import { axiosInstance as axios } from "../../services/axiosInstance";
import { getMovieData } from "../../services/transformData";

export const getMovies = (movie) => ({ type: "GET_MOVIES", payload: movie });
const setMoviesLoading = (isLoading) => ({
  type: "SET_MOVIES_LOADING",
  payload: isLoading,
});
const setMoviesError = (error) => ({
  type: "SET_MOVIES_ERROR",
  payload: error,
});
const setMoviesPage = (page) => ({ type: "SET_MOVIES_PAGE", payload: page });

export const fetchMovies = (page) => async (dispatch, getState) => {
  dispatch(setMoviesLoading(true));
  try {
    const { data } = await axios({
      url: `movie/now_playing?page=${page || getState().movies.page}`,
      method: "GET",
      transformResponse: [
        ...axios.defaults.transformResponse,
        (data) => {
          const results = data.results.map(getMovieData);
          return results;
        },
      ],
    });
    dispatch(getMovies(data));
    dispatch(setMoviesPage((page || getState().movies.page) + 1));
    dispatch(setMoviesError(null));
  } catch (error) {
    dispatch(setMoviesError(error.errors));
  }
  dispatch(setMoviesLoading(false));
};
