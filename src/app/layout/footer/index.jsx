/**
 * Author iWuzhi
 * Date 2019/12/3
 * */
/* eslint-disable */
import React, { Component } from 'react';

import styles from './index.css';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.footer}>©2019 iWuzhi</div>;
  }
}
