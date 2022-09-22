import React from "react";
import { VStack, Flex } from "@chakra-ui/react";
import { HiHome, HiSearch, HiLibrary } from "react-icons/hi";
import { RiAddBoxFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import MenuItem from "./sidebar-menu/MenuItem";
import MenuCollection from "./sidebar-menu/MenuCollection";
import { Link } from "@chakra-ui/react";

import { Outlet } from "react-router-dom";
// import Cookies from "/spotify-clone/cookies";

function Sidebar() {
  return (
    <VStack bg="black" h="100vh" w="20%" p="2" spacing={10}>
      <Flex w="100%" h="2vh" p="0" m="0" direction="column" as="b" mb="4">
        <MenuItem
          icon={BsSpotify}
          text="Spotify"
          linkTo="/spotify-clone"
          fontSize="2xl"
          iconSize={{ width: 9, height: 9 }}
        />
      </Flex>
      <Flex h="18vh" w="100%" direction="column">
        <MenuItem icon={HiHome} text="Home" linkTo="/spotify-clone" />
        <MenuItem
          icon={HiSearch}
          text="Search"
          linkTo="/spotify-clone/search"
        />
        <MenuCollection
          icon={HiLibrary}
          text="Library"
          linkTo="/spotify-clone/collection"
        />
      </Flex>
      <Flex
        h="60vh"
        bg="black"
        w="100%"
        borderTopWidth={1}
        borderTopColor="#444"
        pt="4"
        direction="column"
      >
        <MenuItem
          icon={RiAddBoxFill}
          text="Create list"
          linkTo="/spotify-clone"
        />
        <MenuCollection
          icon={FaHeartbeat}
          text="Songs you liked"
          linkTo="/spotify-clone/collection/tracks"
        />
      </Flex>
      <Flex h="40vh" bg="black" w="100%" direction="column" m="0" pl="3">
        <Link>Cookies</Link>
        <Link>Privacity</Link>
      </Flex>
    </VStack>
  );
}

export default Sidebar;
