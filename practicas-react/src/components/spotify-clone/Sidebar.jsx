import React from "react";
import { VStack, Flex } from "@chakra-ui/react";

function Sidebar() {
  return (
    <VStack bg="black" h="100vh" w="15%" p="8">
      <Flex h="40vh" bg="gray.200" w="100%">
        <h2>menu 1</h2>
      </Flex>
      <Flex h="100vh" bg="gray.500" w="100%">
        <h2>menu 2</h2>
      </Flex>
    </VStack>
  );
}

export default Sidebar;
