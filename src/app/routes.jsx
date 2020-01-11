/**
 * Author iWuzhi
 * Date 2019/12/3
 * */
import React from "react";
import loadable from "@loadable/component";
import { Spin } from "antd";

const Loading = (
  <Spin
    size="large"
    spinning
    tip="loading..."
    style={{ margin: "200px auto", display: "block" }}
  />
);

const routes = [
  {
    path: "/",
    breadcrumbName: "Home",
    exact: true,
    component: loadable(() => import("./home"), {
      fallback: Loading
    }),
    routes: []
  }
];

export default routes;
