const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const similarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SIMILARS":
      return { ...state, data: action.payload };
    case "SET_SIMILARS_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_SIMILARS_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default similarsReducer;
