import {
  DotLoader,
  HashLoader,
  PacmanLoader,
  ClimbingBoxLoader,
} from "react-spinners";
import styles from "./styles.module.scss";

export default function DotLoaderSpinner({ loading }) {
  return (
    <div className={styles.loadeer}>
      <ClimbingBoxLoader oader color="#2f82ff" loading={loading} />{" "}
    </div>
  );
}
