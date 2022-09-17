import React from "react";
import { VStack, Flex } from "@chakra-ui/react";
import MenuCollection from "./sidebar-menu/MenuCollection";
import { Outlet } from "react-router-dom";

function Content() {
  return (
    <VStack h="85vh" w="80%" p="0">
      <Flex
        bg="#333"
        w="100%"
        h="10vh"
        pos="fixed"
        top={0}
        left="20%"
        align="center"
        px={8}
      >
        <h2>HEADER FIXED</h2>
      </Flex>
      <Flex h="100vh" bg="#111" w="100%" px={8}>
        <h1> Content</h1>
      </Flex>
    </VStack>
  );
}

export default Content;
