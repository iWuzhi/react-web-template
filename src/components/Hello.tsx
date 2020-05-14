import * as React from "react";

import styles from "./Hello.less";

export interface HelloProps {
  compiler: string;
  framework: string;
}

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export default class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div className={styles.mainWrapper}>
        <h1 className={styles.container}>
          Hello from {this.props.compiler} and {this.props.framework}!
        </h1>
      </div>
    );
  }
}
