const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const castReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_CAST":
      return { ...state, data: action.payload };
    case "SET_CAST_LOADING":
      return { ...state, isLoading: action.payload };
    case "SET_CAST_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export default castReducer;
