import React, { useContext, useState, useEffect } from "react";
import TMBD from "../services/TMDB";
import AsyncStorage from "@react-native-async-storage/async-storage";

const SessionContext = React.createContext();

export function useSession() {
  return useContext(SessionContext);
}

export function SessionProvider({ children }) {
  const [session, setSession] = useState();

  useEffect(() => {
    const getSession = async () => {
      try {
        const id = await AsyncStorage.getItem("@guest_session_id");
        if (id !== null) {
          return setSession({ id });
        }
        const { guest_session_id } = await new TMBD().getGuestSession();
        await AsyncStorage.setItem("@guest_session_id", guest_session_id);
        setSession({ id: guest_session_id });
      } catch (error) {
        setSession(null);
      }
    };
    getSession();
    return getSession;
  }, []);

  return (
    <SessionContext.Provider value={session}>
      {children}
    </SessionContext.Provider>
  );
}
