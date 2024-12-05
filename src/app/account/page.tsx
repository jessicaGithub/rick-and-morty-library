import { Container, Text } from "@chakra-ui/react";
import { getCookie } from "cookies-next";

import LoginForm from "@/app/_components/LoginForm";

import styles from "./page.module.css";

export default function Account() {
  return (
    <Container maxW='2xl' centerContent>
      <main className={styles.main}>
        <Text>Update your detail?</Text>
        <LoginForm />
      </main>
    </Container>
  );
}
