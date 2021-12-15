import AsyncStorage from "@react-native-async-storage/async-storage";
import { axiosInstance as axios } from "../../services/axiosInstance";

export const getGuestSession = (guestSession) => ({
  type: "GET_GUEST_SESION",
  payload: guestSession,
});

export const fetchGuestSession = () => {
  return async (dispatch) => {
    try {
      const id = await AsyncStorage.getItem("@guest_session_id");
      if (id !== "undefined" && id !== null)
        return dispatch(getGuestSession({ id }));

      const { data } = await axios({
        url: `authentication/guest_session/new`,
        method: "GET",
        transformResponse: [
          ...axios.defaults.transformResponse,
          (data) => ({ id: data.guest_session_id }),
        ],
      });
      dispatch(getGuestSession(data));
    } catch (error) {
      dispatch(getGuestSession(error.errors));
    }
  };
};
