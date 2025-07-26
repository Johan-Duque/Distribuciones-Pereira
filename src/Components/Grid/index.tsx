import type { ReactNode } from "react";
import styles from "./Grid.module.css";

interface props {
  children: ReactNode;
  width: number;
}

function Grid({ children, width }: props) {
  return <div className={styles.grid_container} style={{width: `${width}%`}}>{children}</div>;
}

export { Grid };
