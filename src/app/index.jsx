/**
 * Author iWuzhi
 * Date 2019/11/30
 * */
import React from "react";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import ErrorBoundary from "./error";
import Layout from "./layout";

import store from "../_redux/store";

import "./App.css";

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <Router>
          <Layout />
        </Router>
      </Provider>
    </ErrorBoundary>
  );
}
export default process.env.NODE_ENV === "development" ? hot(App) : App;
