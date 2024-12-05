import { Flex } from "@chakra-ui/react";
import { Navbar } from "../_components/Navbar";
 
export default function Layout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Flex minH={'100vh'} minW={'100%'} alignItems='flex-start' justifyContent='flex-start' direction="column">
      <Navbar />
      <main>{children}</main>
    </Flex>
  )
}