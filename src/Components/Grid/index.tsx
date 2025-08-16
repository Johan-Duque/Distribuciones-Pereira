import type { ReactNode } from "react";
import styles from "./Grid.module.css";

interface props {
  children: ReactNode;
  maxWidth?: boolean;
  marginBottom?: boolean;
}

function Grid({ children, maxWidth, marginBottom }: props) {
  const gridClassName = `${styles.grid_container} ${maxWidth ? styles.max_width_90 : ''}`;
  return <div className={gridClassName} style={marginBottom ? {marginBottom: `var(--margin-bottom)`} : {} }>{children}</div>;
}

export { Grid };
