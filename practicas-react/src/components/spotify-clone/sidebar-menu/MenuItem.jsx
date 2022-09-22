import React from "react";
import { Link } from "react-router-dom";
import { Flex, Text, Icon } from "@chakra-ui/react";

function MenuItem(props) {
  const {
    icon,
    text,
    linkTo,
    fontSize = "md",
    iconSize = { width: 7, height: 7 },
  } = props;

  return (
    <Link w="100%" to={linkTo}>
      <Flex bg="black" w="100%" p="2" ml="3">
        <Icon as={icon} w={iconSize.width} h={iconSize.height} mr="3" />
        <Text fontSize={fontSize} textAlign="left" as="b" mt="0.5">
          {text}
        </Text>
      </Flex>
    </Link>
  );
}

export default MenuItem;
