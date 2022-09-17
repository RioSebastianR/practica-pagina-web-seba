import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text, Icon } from "@chakra-ui/react";

function MenuItem(props) {
  const { icon, text, linkTo } = props;

  return (
    <Link w="100%" to={linkTo}>
      <Flex bg="black" w="100%" p="2" ml="3">
        <Icon as={icon} w={7} h={7} mr="3" />
        <Text fontSize="md " textAlign="left" as="samp" mt="0.5">
          {text}
        </Text>
      </Flex>
    </Link>
  );
}

export default MenuItem;