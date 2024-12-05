import { Text } from "@chakra-ui/react";
import styles from "./page.module.css";

export default function Characters() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Text>Search by name:</Text>
        <input
          type="text"
          id="name"
          name="name"
        />
      </main>
    </div>
  );
}
