import React from "react";
import MainStack from "./src/navigation/MainStack";
import { SessionProvider } from "./src/contexts/SessionContext";
import { RatedProvider } from "./src/contexts/RatedContext";
import RequestsHookProvider from "./src/contexts/RequestsHookContext";

export default function App(props) {
  return (
    <RequestsHookProvider>
      <SessionProvider>
        <RatedProvider>
          <MainStack />
        </RatedProvider>
      </SessionProvider>
    </RequestsHookProvider>
  );
}
