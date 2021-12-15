import { axiosInstance as axios } from "../../services/axiosInstance";
import { getMovieData } from "../../services/transformData";

export const getMovie = (movie) => ({ type: "GET_MOVIE", payload: movie });
const setMovieLoading = (isLoading) => ({
  type: "SET_MOVIE_LOADING",
  payload: isLoading,
});
const setMovieError = (error) => ({ type: "SET_MOVIE_ERROR", payload: error });

export const fetchMovie = (id) => async (dispatch) => {
  dispatch(setMovieLoading(true));
  try {
    const { data } = await axios({
      url: `/movie/${id}`,
      method: "GET",
      transformResponse: [
        ...axios.defaults.transformResponse,
        (data) => getMovieData(data),
      ],
    });
    dispatch(getMovie(data));
    dispatch(setMovieError(null));
  } catch (error) {
    dispatch(setMovieError(error.errors));
  }
  dispatch(setMovieLoading(false));
};
