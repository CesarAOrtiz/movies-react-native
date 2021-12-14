import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import movieReducer from "./reducers/movie";
import moviesReducer from "./reducers/movies";
import castReducer from "./reducers/cast";
import similarsReducer from "./reducers/similars";
import sessionReducer from "./reducers/session";
import ratedReducer from "./reducers/rated";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  movie: movieReducer,
  movies: moviesReducer,
  cast: castReducer,
  similars: similarsReducer,
  session: sessionReducer,
  rated: ratedReducer,
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
