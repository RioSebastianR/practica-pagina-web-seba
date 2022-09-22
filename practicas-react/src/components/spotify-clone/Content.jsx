import React from "react";
import { VStack, Flex, Spacer } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import { Outlet } from "react-router-dom";
import MenuHeader from "./content-menu/MenuHeader";

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
        px={10}
      >
        <Flex mr="5">
          <MenuHeader icon={IoIosArrowBack} linkTo="/spotify-clone" />
        </Flex>
        <Flex mr="600">
          <MenuHeader icon={IoIosArrowForward} linkTo="/spotify-clone" />
        </Flex>
        <Flex>
          {/* <MenuSingup text="Singup" linkTo="/spotify-clone" /> */}
        </Flex>
      </Flex>
      <Flex h="100vh" bg="#111" w="100%" px={8} pt="5vh">
        <Outlet />
      </Flex>
    </VStack>
  );
}

export default Content;
