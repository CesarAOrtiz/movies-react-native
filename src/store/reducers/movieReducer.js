const initialState = {};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return action.payload;
    case "FETCH_MOVIE":
      return action.payload;
    default:
      return state;
  }
};

export default movieReducer;
