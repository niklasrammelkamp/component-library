import Link from "next/link";
import React, { ReactNode } from "react";
import styles from "./styles.module.scss";
import classNames from "classnames";
import Icon from "@/components/Icon";

interface ButtonProps {
  href?: string;
  second?: boolean;
  extern?: boolean;
  bottom?: boolean;
  children: ReactNode;
}

const Button02: React.FC<ButtonProps> = ({ href, children, ...props }) => {
  if (href) {
    return (
      <Link
        href={href}
        passHref
        className={classNames(styles.button, {
          [styles.top]: props.extern,
          [styles.top]: props.bottom,
        })}
      >
        <span className={styles.content}>{children}</span>
        <span className={styles.iconWrapper}>
          <Icon variant="arrow" className={styles.icon} />
        </span>
      </Link>
    );
  }

  // If href is not provided, render a regular button
  return (
    <button
      {...props}
      className={classNames(styles.button, {
        [styles.extern]: props.extern,
        [styles.bottom]: props.bottom,
      })}
    >
      {children}

      <Icon variant="arrow" className={styles.icon} />
    </button>
  );
};

export default Button02;
