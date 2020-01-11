/**
 * Author iWuzhi
 * Date 2019/12/8
 * */
/* eslint-disable */
import React, { Component } from 'react';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

import styles from './index.css';

import routes from '../../routes.jsx';

export default class Sider extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className={styles.sider}>
        <div className={styles.logo}>React Demo</div>
        <Menu
          theme="light"
          mode="vertical"
          className={styles.menu}
          defaultSelectedKeys={['/']}
        >
          {routes.map((route) => (
            <Menu.Item key={route.path}>
              <NavLink to={route.path}>{route.breadcrumbName}</NavLink>
            </Menu.Item>
          ))}
        </Menu>
      </nav>
    );
  }
}
