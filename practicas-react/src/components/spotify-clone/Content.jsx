import React from "react";
import { VStack, Flex } from "@chakra-ui/react";

function Content() {
  return (
    <VStack bg="black" h="100vh" w="85%">
      <Flex bg="gray.200" w="100%" h="20vh">
        <h2>HEADER FIXED</h2>
      </Flex>
      <Flex h="190vh" bg="black" w="100%">
        <h2>CONTENT</h2>
      </Flex>
    </VStack>
  );
}

export default Content;
