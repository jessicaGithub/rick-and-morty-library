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
} from "@chakra-ui/react";
import { GET_CHARACTER_BY_ID } from "@/queries/character-queries";
import { useQuery } from "@apollo/client";
import { redirect } from "next/navigation";
import { useState } from "react";

function Modal({ id }: { id: string }) {
  const [isOpen, setIsOpen] = useState(true);
  const { data, loading, error } = useQuery(GET_CHARACTER_BY_ID, {
    variables: { id: id },
  });

  const onClose = () => {
    setIsOpen(false);
    redirect("/characters");
  };

  return (
    <ChakraModal
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        {data?.character?.name}
        </ModalBody>

        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={onClose}
          >
            Close
          </Button>
          <Button variant="ghost">Secondary Action</Button>
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  );
}

export default Modal;
