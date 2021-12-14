const initialState = {};

const ratedReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_RATED_MOVIES":
      return action.payload;
    case "RATE_MOVIE":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default ratedReducer;
