import React from "react";
import MainStack from "./src/navigation/MainStack";
import { SessionProvider } from "./src/contexts/SessionContext";
import { RatedProvider } from "./src/contexts/RatedContext";

export default function App(props) {
    return (
        <SessionProvider>
            <RatedProvider>
                <MainStack />
            </RatedProvider>
        </SessionProvider>
    );
}
