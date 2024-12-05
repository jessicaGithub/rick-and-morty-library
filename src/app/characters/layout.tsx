import { Flex, Box } from "@chakra-ui/react";
import { Navbar } from "../_components/Navbar";
import { Suspense } from "react";
 
export default function Layout({ children, modal }: {
    children: React.ReactNode;
    modal: React.ReactNode;
  }) {
  return (
    <Suspense>
      <Flex minH={'100vh'} minW={'100%'} alignItems='flex-start' justifyContent='flex-start' direction="column">
        <Navbar />
        <Box width={'100%'}>
          {children}
        </Box>
        {modal}
      </Flex>
    </Suspense>
  )
}