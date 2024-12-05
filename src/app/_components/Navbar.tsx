"use client";

import { Avatar, Box,  Flex, Heading, Spacer } from "@chakra-ui/react";
import { getCookie } from "cookies-next";
import Link from "next/link";

export function Navbar() {
  const cookieVal = getCookie("userInfo");
  const userData = cookieVal ? JSON.parse(String(cookieVal)) : null;

  return (
    <nav style={{ width: '100%'}}>
      <Box py="10">
        <Flex justifyContent='center'>
          <Link href="/characters">
            <Heading
              as="h1"
              color="green"
            >
              Rick and Morty Library
            </Heading>
          </Link>
          <Spacer />
          <Link href="/account">
            {userData?.username && <Avatar name={userData.username} />}
          </Link>
        </Flex>
      </Box>
    </nav>
  );
}
