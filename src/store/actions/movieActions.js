// import {axiosInstance} from '../../../utils/axiosInstance';
import { axiosInstance as axios } from "../../contexts/RequestsHookContext";
import { getMovieData } from "../../services/api";

export const getMovie = (movie) => ({ type: "GET_MOVIE", payload: movie });

export const fetchMovie = (id) => async (dispatch) => {
  try {
    const { data } = await axios({
      url: `/movie/${id}`,
      method: "GET",
      transformResponse: [
        (data) => {
          const json = JSON.parse(data);
          const results = getMovieData(json);
          return results;
        },
      ],
    });
    dispatch(getMovie(data));
  } catch (error) {
    dispatch(getMovie({ error: error.message }));
  }
};
