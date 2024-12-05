import Image from "next/image";
import { Flex, Center, Heading, Text } from "@chakra-ui/react";
import LoginForm from "@/app/_components/LoginForm";

export default function Home() {
  return (
    <Center>
      <Flex direction='column' gap={8} justifyContent='center' alignItems='center'>
        <Image
          width={200}
          height={200}
          src="/logo.jpg"
          alt="rick's image in the style of leonardo.ai logo"
        />
        <Heading
          as="h1"
        >
          Rick and Morty Library
        </Heading>
        <Text>Please fill the form below to access the library:</Text>
        <LoginForm />
      </Flex>
    </Center>
  );
}
