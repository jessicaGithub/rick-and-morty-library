import { Flex, Box } from "@chakra-ui/react";
import { Navbar } from "../_components/Navbar";
 
export default function Layout({ children, modal }: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode;
  }>) {
  return (
    <Flex minH={'100vh'} minW={'100%'} alignItems='flex-start' justifyContent='flex-start' direction="column">
      <Navbar />
      <Box width={'100%'}>{children}</Box>
      {modal}
    </Flex>
  )
}