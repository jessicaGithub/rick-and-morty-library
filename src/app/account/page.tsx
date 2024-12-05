import { Flex, Text } from "@chakra-ui/react";

import LoginForm from "@/app/_components/LoginForm";

export default function Account() {
  return (
    <Flex direction='column' gap={10}>
      <Text><strong>Update your detail?</strong></Text>
      <LoginForm />
    </Flex>
  );
}
