import Image from "next/image";
import { Heading, Text } from '@chakra-ui/react'
import styles from "./page.module.css";
import LoginForm from "@/app/_components/LoginForm";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image width={200} height={200} src="/logo.jpg" alt="rick's image in the style of leonardo.ai logo" />
        <Heading as="h1" textStyle='brand'>Rick and Morty Library</Heading>
        <Text>Please fill the form below to access the library:</Text>
        <LoginForm />
      </main>
    </div>
  );
}
