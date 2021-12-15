import { axiosInstance as axios } from "../../services/axiosInstance";
import { getActor } from "../../services/transformData";

export const getCast = (cast) => ({ type: "GET_CAST", payload: cast });
const setCastLoading = (isLoading) => ({
  type: "SET_CAST_LOADING",
  payload: isLoading,
});
const setCastError = (error) => ({ type: "SET_CAST_ERROR", payload: error });

export const fetchCast = (id) => async (dispatch) => {
  dispatch(setCastLoading(true));
  try {
    const { data } = await axios({
      url: `movie/${id}/credits`,
      method: "GET",
      transformResponse: [
        ...axios.defaults.transformResponse,
        (data) => {
          const characters = data.cast.filter(
            (actor) => actor.character && actor.profile_path
          );
          const results = characters.map(getActor);
          return results;
        },
      ],
    });
    dispatch(getCast(data));
    dispatch(setCastError(null));
  } catch (error) {
    dispatch(setCastError(error.errors));
  }
  dispatch(setCastLoading(false));
};
