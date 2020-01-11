/**
 * Author iWuzhi
 * Date 2019/12/8
 * */
/* eslint-disable */
import React, { Component } from "react";

import styles from "./index.css";

export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <section className={styles.content}>{this.props.children}</section>;
  }
}
