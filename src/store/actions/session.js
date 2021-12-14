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
          (data) => {
            const json = JSON.parse(data);
            const result = { id: json.guest_session_id };
            return result;
          },
        ],
      });
      dispatch(getGuestSession(data));
    } catch (error) {
      dispatch(getGuestSession({ error: error.message }));
    }
  };
};
