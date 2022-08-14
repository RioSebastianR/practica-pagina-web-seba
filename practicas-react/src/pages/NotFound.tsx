import React from "react";
import { VStack, Spacer, Flex, Text, Icon, Button } from "@chakra-ui/react";
import { RiEmotionSadLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// TODO: hacer pagina de login
function NotFound() {
  return (
    <Flex align="center" justify="center" w="100%" h="90vh" dir="column">
      <VStack>
        <Icon as={RiEmotionSadLine} w={20} h={20} />
        <Spacer />
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
          w="100%"
          align="center"
        >
          Page not found
        </Text>
        <Spacer />
        <Link to="/">
          <Button>Go back</Button>
        </Link>
      </VStack>
    </Flex>
  );
}

export default NotFound;
