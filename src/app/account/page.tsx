import { Text } from "@chakra-ui/react";
import { getCookie } from "cookies-next";

import LoginForm from "@/app/_components/LoginForm";

import styles from "./page.module.css";

export default function Account() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Text>Update your detail?</Text>
        <LoginForm />
      </main>
    </div>
  );
}
