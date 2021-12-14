const initialState = {
  data: [],
  isLoading: false,
  error: null,
  page: 1,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, data: state.data.concat(action.payload) };
    case "SET_MOVIES_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_MOVIES_ERROR":
      return { ...state, error: action.payload };
    case "SET_MOVIES_PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};

export default moviesReducer;
