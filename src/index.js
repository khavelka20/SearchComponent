import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import searchReducers from "./reducers/reducers";
import "./css/global.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";

const store = createStore(searchReducers);

render(
  <div className="container">
    <Provider store={store}>
      <App />
    </Provider>
  </div>,
  document.getElementById("root")
);
