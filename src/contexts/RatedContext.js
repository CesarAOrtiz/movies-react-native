import React, { useContext } from "react";
import { useResource } from "react-request-hook";
import { useSession } from "./SessionContext";
import { getRatedMovies } from "../services/api";

const RatedContext = React.createContext();

export function useRated() {
  return useContext(RatedContext);
}

export function RatedProvider({ children }) {
  const session = useSession();
  const [response, request] = useResource(getRatedMovies, [session?.id]);
  const { data, error } = response;

  return (
    <RatedContext.Provider
      value={{ rated: data, fetchRated: () => request(session?.id) }}
    >
      {children}
    </RatedContext.Provider>
  );
}
