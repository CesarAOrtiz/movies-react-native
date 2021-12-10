const initialState = {};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return action.payload;
    case "GET_CAST":
      return { ...state, cast: action.payload };
    case "GET_SIMILARS":
      return { ...state, similars: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
