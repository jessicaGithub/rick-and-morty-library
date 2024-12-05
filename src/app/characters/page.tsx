"use client";

import { useEffect, useState } from "react";
import {
  Text,
  Image,
  Flex,
  Spacer,
  SimpleGrid,
  Card,
  CardBody,
  Input,
  Button,
} from "@chakra-ui/react";
import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

import { GET_CHARACTERS } from "@/queries/character-queries";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Character {
  id: string;
  name: string;
  species: string;
  image: string;
}

export default function Characters() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  const [page, setPage] = useState(Number(params?.get('page')) || 1);
  const [name, setName] = useState(params?.get('name') || "");

  const { data, loading, error } = useQuery(GET_CHARACTERS, {
    variables: { page: page, name: name },
  });

  useEffect(() => {
    // Always do navigations after the first render
    router.push(`${pathname}?page=${page}&name=${name}`, undefined, { shallow: true })
  }, [page, name])

  return (
    <Flex
      direction="column"
      gap={10}
    >
      <Flex gap={20}>
        <Text>Search by name:</Text>
        <Input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Flex>
      <SimpleGrid
        columns={[1, 2, 6]}
        spacing={10}
      >
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data?.characters?.results?.map((character: Character) => (
          <Link
            key={character.id}
            href={`/characters/${character.id}?page=${page}&name=${name}`}
            scroll={false}
            passHref
          >
            <Card>
              <Image
                objectFit="cover"
                src={character.image}
                alt={character.name}
                width="100%"
                height="100%"
                aspectRatio={1}
              />
              <CardBody>
                <Text>{character.name}</Text>
              </CardBody>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
      <Flex py={20}>
        {data?.characters?.info?.prev && (
          <Button
            colorScheme="green"
            size={{ base: "sm", md: "lg" }}
            leftIcon={<ChevronLeftIcon />}
            onClick={() => {
              setPage(page - 1);
            }}
          >
            Previous
          </Button>
        )}
        <Spacer />
        {data?.characters?.info?.next && (
          <Button
            colorScheme="green"
            size={{ base: "sm", md: "lg" }}
            rightIcon={<ChevronRightIcon />}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            Next
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
