import React, { ReactNode } from "react";
import styles from "./styles.module.scss";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return <main className={styles.main}>{children}</main>;
};

export default Layout;
