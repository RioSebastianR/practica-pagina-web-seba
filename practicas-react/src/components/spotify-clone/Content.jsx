import React from "react";
import { VStack, Flex } from "@chakra-ui/react";

function Content() {
  return (
    <VStack h="100vh" w="85%">
      <Flex
        bg="#333"
        w="100%"
        h="65px"
        pos="fixed"
        top={0}
        left="15%"
        align="center"
        px={8}
      >
        <h2>HEADER FIXED</h2>
      </Flex>
      <Flex h="190vh" bg="#111" w="100%" px={8}>
        <h2>CONTENT</h2>
      </Flex>
    </VStack>
  );
}

export default Content;
