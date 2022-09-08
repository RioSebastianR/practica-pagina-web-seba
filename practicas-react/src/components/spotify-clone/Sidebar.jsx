import React from "react";
import { VStack, Flex } from "@chakra-ui/react";

function Sidebar() {
  return (
    <VStack bg="black" h="100vh" w="15%" p="2">
      <Flex color="red" bg="white" h="12vh" w="100%">
        <h2>prox. a colocar simbolo + link</h2>
      </Flex>
      <Flex bg="black" h="35vh" w="100%">
        <h2>menu 2</h2>
      </Flex>
      <Flex
        h="35vh"
        bg="black"
        w="100%"
        borderTopWidth={1}
        borderTopColor="#444"
        pt="4"
        direction="column"
      >
        <h2>Create list</h2>
        <h2>Songs you liked</h2>
      </Flex>
      <Flex h="20vh" bg="gray.500" w="100%">
        <h2>Cookies</h2>
        <h2>Privacity</h2>
      </Flex>
    </VStack>
  );
}

export default Sidebar;
