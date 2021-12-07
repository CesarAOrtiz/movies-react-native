import React, { useContext, useState, useEffect } from "react";
import { useResource } from "react-request-hook";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getGuestSession } from "../services/api";

const SessionContext = React.createContext();

export function useSession() {
  return useContext(SessionContext);
}

export function SessionProvider({ children }) {
  const [session, setSession] = useState();
  const [response, request] = useResource(getGuestSession);
  const { data: guestSession, error } = response;

  useEffect(() => {
    const getSession = async () => {
      try {
        const id = await AsyncStorage.getItem("@guest_session_id");
        id !== "undefined" && id !== null ? setSession({ id }) : request();
      } catch (error) {
        setSession(null);
      }
    };
    getSession();
  }, []);

  useEffect(() => {
    const setSessionId = async (id) => {
      try {
        await AsyncStorage.setItem("@guest_session_id", id);
        setSession({ id });
      } catch (error) {
        setSession(null);
      }
    };
    if (guestSession) {
      setSessionId(guestSession.guest_session_id);
    }
  }, [guestSession]);

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}
