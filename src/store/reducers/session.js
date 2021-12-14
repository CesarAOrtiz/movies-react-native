const initialState = {};

const guestSessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_GUEST_SESION":
      return action.payload;
    default:
      return state;
  }
};

export default guestSessionReducer;
