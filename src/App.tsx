import React from "react";
import Routes from "./routes";
import store from "./store";
import { Provider } from "react-redux";
import "./assets/styles/Style.scss";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
