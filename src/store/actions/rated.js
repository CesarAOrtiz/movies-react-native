import { axiosInstance as axios } from "../../services/axiosInstance";

export const getRatedMovies = (ratedMovies) => ({
  type: "GET_RATED_MOVIES",
  payload: ratedMovies,
});

export const rateMovie = (movieId, rating) => ({
  type: "RATE_MOVIE",
  payload: { [movieId]: rating },
});

export const fetchRatedMovies = (guest_session) => {
  return async (dispatch) => {
    try {
      const { data } = await axios({
        url: `guest_session/${guest_session}/rated/movies`,
        method: "GET",
        transformResponse: [
          (data) => {
            const json = JSON.parse(data);
            const results = {};
            json.results.forEach((movie) => {
              results[movie.id] = movie.rating;
            });
            return results;
          },
        ],
      });
      dispatch(getRatedMovies(data));
    } catch (error) {
      dispatch(getRatedMovies({ error: error.message }));
    }
  };
};

export const postRateMovie = (sessionId, movieId, value) => {
  return async (dispatch) => {
    try {
      await axios({
        url: `movie/${movieId}/rating?guest_session_id=${sessionId}`,
        method: "POST",
        data: { value },
      });
      dispatch(rateMovie(movieId, value));
    } catch (error) {
      dispatch(rateMovie({ error: error.message }));
    }
  };
};
