import React, { useContext, useState, useEffect } from "react";
import { useSession } from "./SessionContext";
import TMBD from "../services/TMDB";

const RatedContext = React.createContext();

export function useRated() {
    return useContext(RatedContext);
}

export function RatedProvider({ children }) {
    const session = useSession();
    const [rated, setRated] = useState({});

    useEffect(() => {
        const getRated = async (id) => {
            try {
                const rateds = await new TMBD().getRatedMovies(id);
                setRated(rateds);
            } catch (error) {
                setRated((prev) => ({ ...prev, error: error.message }));
            }
        };
        if (session?.id) getRated(session?.id);
    }, [session]);

    return (
        <RatedContext.Provider value={{ rated, setRated }}>
            {children}
        </RatedContext.Provider>
    );
}
