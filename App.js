import React from "react";
import { Provider } from "react-redux";
import store from "./src/store";
import MainStack from "./src/navigation/MainStack";
import { RatedProvider } from "./src/contexts/RatedContext";

export default function App() {
  return (
    <Provider store={store}>
      <RatedProvider>
        <MainStack />
      </RatedProvider>
    </Provider>
  );
}
