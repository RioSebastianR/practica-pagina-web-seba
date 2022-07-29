import React from "react";

import { Flex, Text } from "@chakra-ui/react";

function Content() {
  return (
    <Flex align="center" justify="center" w="100%" h="90vh">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="6xl"
        fontWeight="extrabold"
        w="50%"
      >
        Welcome to Chakra UI
      </Text>
    </Flex>
  );
}

export default Content;
