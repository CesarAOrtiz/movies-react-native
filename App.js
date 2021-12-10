import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import MainStack from "./src/navigation/MainStack";
import { SessionProvider } from "./src/contexts/SessionContext";
import { RatedProvider } from "./src/contexts/RatedContext";
import RequestsHookProvider from "./src/contexts/RequestsHookContext";

export default function App(props) {
  return (
    <Provider store={store}>
      <RequestsHookProvider>
        <SessionProvider>
          <RatedProvider>
            <MainStack />
          </RatedProvider>
        </SessionProvider>
      </RequestsHookProvider>
    </Provider>
  );
}
