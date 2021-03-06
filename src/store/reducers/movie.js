const initialState = {
  data: {},
  isLoading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE":
      return { ...state, data: action.payload };
    case "SET_MOVIE_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_MOVIE_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default movieReducer;
