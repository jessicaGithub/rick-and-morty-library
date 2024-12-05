import type { Metadata } from "next";
import { ChakraProvider, Container } from "@chakra-ui/react";
import { ApolloWrapper } from "../lib/ApolloWrapper";

import { brandTheme } from "./brandTheme";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rick and Morty Library",
  description: "A library of Rick and Morty characters",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ApolloWrapper>
          <ChakraProvider theme={brandTheme}>
            <Container maxW='container.xl' centerContent>
                {children}
            </Container>
            </ChakraProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}