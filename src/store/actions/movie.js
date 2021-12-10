import { axiosInstance as axios } from "../../contexts/RequestsHookContext";
import { getMovieData, getActor } from "../../services/api";

export const getMovie = (movie) => ({ type: "GET_MOVIE", payload: movie });
export const getCast = (cast) => ({ type: "GET_CAST", payload: cast });
export const getSimilars = (similars) => ({
  type: "GET_SIMILARS",
  payload: similars,
});

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

export const fetchCast = (id) => async (dispatch) => {
  try {
    const { data } = await axios({
      url: `movie/${id}/credits`,
      method: "GET",
      transformResponse: [
        (data) => {
          const json = JSON.parse(data);
          const characters = json.cast.filter(
            (actor) => actor.character && actor.profile_path
          );
          const results = characters.map(getActor);
          return results;
        },
      ],
    });
    dispatch(getCast(data));
  } catch (error) {
    dispatch(getCast({ error: error.message }));
  }
};

export const fetchSimilars = (id) => async (dispatch) => {
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
  } catch (error) {
    dispatch(getSimilars({ error: error.message }));
  }
};
