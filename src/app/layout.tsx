import type { Metadata } from "next";
import { ChakraProvider } from "@chakra-ui/react";
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
          <ChakraProvider theme={brandTheme}>{children}</ChakraProvider>
        </ApolloWrapper>
      </body>
    </html>
  );
}