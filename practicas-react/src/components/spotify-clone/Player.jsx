import React from "react";
import { HStack, Flex } from "@chakra-ui/react";

function Player() {
  return (
    <HStack bg="black" pos="fixed" w="100%" h="200px">
      <Flex h="40vh" bg="gray.900" color="white" w="20%">
        <h2>Seccion 1</h2>
      </Flex>
      <Flex h="40vh" bg="gray.900" color="white" w="80%">
        <h2>Seccion 2</h2>
      </Flex>
      <Flex h="40vh" bg="gray.900" color="white" w="20%">
        <h2>Seccion 3</h2>
      </Flex>
    </HStack>
  );
}

export default Player;
