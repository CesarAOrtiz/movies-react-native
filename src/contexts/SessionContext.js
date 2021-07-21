import React, { useContext, useState, useEffect } from "react";
import TMBD from "../services/TMDB";

const SessionContext = React.createContext();

export function useSession() {
    return useContext(SessionContext);
}

export function SessionProvider({ children }) {
    const [session, setSession] = useState();

    useEffect(() => {
        const getSession = async () => {
            try {
                const { guest_session_id, expires_at } = {
                    guest_session_id: "6aede4017ef4e84603de148044102b86",
                    expires_at: 1,
                };
                //await new TMBD().getGuestSession();
                setSession({ id: guest_session_id, expires_at });
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
