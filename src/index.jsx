/**
 * Author iWuzhi
 * Date 2019/11/30
 * */
import React from "react";
import ReactDOM from "react-dom";

import App from "./app";

if (process.env.MOCK) {
  // eslint-disable-next-line
  require("./_mock/api.js");
}
ReactDOM.render(<App />, document.getElementById("root"));
