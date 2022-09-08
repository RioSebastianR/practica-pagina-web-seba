import React from "react";
import { Box, Flex } from "@chakra-ui/react";

function Player() {
  return (
    <Flex
      h="95px"
      bg="#1A1A1A"
      color="white"
      w="100%"
      pos="fixed"
      bottom={0}
      p={8}
      dir="row"
      borderTopWidth={1}
      borderTopColor="#252525"
    >
      <Flex w="80%" align="center">
        <h2>Seccion 1</h2>
      </Flex>
      <Flex w="80%" align="center">
        <h2>Seccion 2</h2>
      </Flex>
      <Flex w="20%" align="center">
        <h2>Seccion 3</h2>
      </Flex>
    </Flex>
  );
}

export default Player;
