import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGuestSession } from "../store/actions/session";
import { fetchRatedMovies, postRateMovie } from "../store/actions/rated";

const RatedContext = React.createContext();

export function useRated() {
  return useContext(RatedContext);
}

export function RatedProvider({ children }) {
  const dispatch = useDispatch();
  const { session, rated } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchGuestSession());
  }, []);

  useEffect(() => {
    session.id && dispatch(fetchRatedMovies(session.id));
  }, [session]);

  return (
    <RatedContext.Provider
      value={{
        rated,
        rate: (movieId, rating) =>
          dispatch(postRateMovie(session.id, movieId, rating)),
      }}
    >
      {children}
    </RatedContext.Provider>
  );
}
