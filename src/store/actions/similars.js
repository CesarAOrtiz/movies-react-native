import { axiosInstance as axios } from "../../services/axiosInstance";
import { getMovieData } from "../../services/transformData";

export const getSimilars = (similars) => ({
  type: "GET_SIMILARS",
  payload: similars,
});
const setSimilarsLoading = (isLoading) => ({
  type: "SET_SIMILARS_LOADING",
  payload: isLoading,
});
const setSimilarError = (error) => ({
  type: "SET_SIMILARS_ERROR",
  payload: error,
});

export const fetchSimilars = (id) => async (dispatch) => {
  dispatch(setSimilarsLoading(true));
  try {
    const { data } = await axios({
      url: `movie/${id}/similar`,
      method: "GET",
      transformResponse: [
        (data) => {
          const json = JSON.parse(data);
          const results = json.results.map(getMovieData);
          return results;
        },
      ],
    });
    dispatch(getSimilars(data));
    dispatch(setSimilarError(null));
  } catch (error) {
    dispatch(setSimilarError(error.message));
  }
  dispatch(setSimilarsLoading(false));
};
