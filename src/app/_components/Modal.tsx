'use client' 

import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  Image,
  Flex,
  Box,
  Stack,
} from "@chakra-ui/react";
import { GET_CHARACTER_BY_ID } from "@/queries/character-queries";
import { useQuery } from "@apollo/client";
import { redirect, useSearchParams } from "next/navigation";
import { useState } from "react";

function Modal({ id }: { id: string }) {
  const params = useSearchParams();

  const [isOpen, setIsOpen] = useState(true);
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id: id },
  });

  const onClose = () => {
    setIsOpen(false);
    redirect(`/characters?page=${Number(params?.get('page'))}&name=${params?.get('name')}`);
  };

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{data?.character?.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        {loading && <Text>Loading...</Text>}
        {error && <Text>Error: {error.message}</Text>}
        {data && (
          <Flex gap={4} direction='column'>
            <Image src={data.character.image} alt={data.character.name} width='100%' height='100%' aspectRatio={1} />
            <Stack>
              <Box>
                <Text><strong>Origin:</strong></Text>
                <Text>{data.character.origin.name}</Text>
              </Box>
              <Box>
                <Text><strong>Current location:</strong></Text>
                <Text>{data.character.location.name}</Text>
              </Box>
              <Box>
                <Text><strong>Status:</strong></Text>
                <Text>{data.character.status}</Text>
              </Box>
              <Box>
                <Text><strong>Species:</strong></Text>
                <Text>{data.character.species}</Text>
              </Box>
              <Box>
                <Text><strong>Gender:</strong></Text>
                <Text>{data.character.gender}</Text>
              </Box>
            </Stack>
          </Flex>
        )}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="green"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
}

export default Modal;
