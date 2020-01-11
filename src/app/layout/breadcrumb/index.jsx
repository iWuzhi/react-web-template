/**
 * Author iWuzhi
 * Date 2019/12/8
 * */
/* eslint-disable */
import React, { Component } from "react";
import { Breadcrumb } from "antd";
import {
  Switch,
  Route,
  withRouter,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

import styles from "./index.css";

export default class IBreadcrumb extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { routes } = this.props;
    return (
      <Breadcrumb className={styles.breadcrumb}>
        <Breadcrumb.Item>
          <NavLink to="/">首页</NavLink>
        </Breadcrumb.Item>
        {routes.map(route => {
          if (route.path === "/") {
            return null;
          }
          return (
            <Breadcrumb.Item key={route.path}>
              <NavLink to={route.path}>{route.breadcrumbName}</NavLink>
            </Breadcrumb.Item>
          );
        })}
      </Breadcrumb>
    );
  }
}
