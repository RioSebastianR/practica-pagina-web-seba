import React from "react";
import { VStack, Flex } from "@chakra-ui/react";

function Sidebar() {
  return (
    <VStack bg="black" h="100vh" w="15%" p="4">
      <Flex bg="black" h="40vh" w="100%">
        <h2>menu 1</h2>
      </Flex>
      <Flex
        h="100vh"
        bg="black"
        w="100%"
        borderTopWidth={1}
        borderTopColor="#444"
        pt="4"
      >
        <h2>menu 2</h2>
      </Flex>
    </VStack>
  );
}

export default Sidebar;
