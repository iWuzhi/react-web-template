/**
 * Author iWuzhi
 * Date 2019/12/8
 * */
/* eslint-disable */
import React, { Component } from "react";

import styles from "./index.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <header className={styles.header}>Welcome，I'm Yume.</header>;
  }
}
