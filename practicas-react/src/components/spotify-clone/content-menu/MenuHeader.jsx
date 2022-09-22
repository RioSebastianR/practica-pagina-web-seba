import React from "react";
import { Link } from "react-router-dom";
import { Flex, Icon, Spacer } from "@chakra-ui/react";

function MenuHeader(props) {
  const {
    icon,

    linkTo,
    fontSize = "md",
    iconSize = { width: 7, height: 7 },
  } = props;

  return (
    <Link w="100%" to={linkTo}>
      <Flex
        bg="black"
        w="100%"
        m="0"
        p="0.5"
        ml="0"
        spacing={2}
        borderRadius="15px"
      >
        <Icon as={icon} w={iconSize.width} h={iconSize.height} mr="0" />
      </Flex>
    </Link>
  );
}

export default MenuHeader;
