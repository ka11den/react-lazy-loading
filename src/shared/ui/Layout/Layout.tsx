import { type ReactNode } from "react";
import { Outlet } from "react-router-dom";

import styles from "../Layout/Layout.module.scss";

type Props = {
  header: ReactNode;
}

export function Layout(props: Props) {
  return (
    <div className={styles.container}>
      {props.header}
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}