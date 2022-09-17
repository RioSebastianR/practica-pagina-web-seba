import React from "react";
import { VStack, Flex } from "@chakra-ui/react";
import { HiHome, HiSearch, HiLibrary } from "react-icons/hi";
import { RiAddBoxFill } from "react-icons/ri";
import { FaHeartbeat } from "react-icons/fa";
import { BsSpotify } from "react-icons/bs";
import MenuItem from "./sidebar-menu/MenuItem";
import MenuCollection from "./sidebar-menu/MenuCollection";
import { Outlet } from "react-router-dom";
// import Cookies from "/spotify-clone/cookies";

// import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <VStack bg="black" h="100vh" w="20%" p="2" spacing={10}>
      <Flex w="100%" h="2vh" p="0" m="0" direction="column">
        <MenuItem icon={BsSpotify} text="Spotify" linkTo="/spotify-clone" />
      </Flex>
      <Flex h="35vh" w="100%" direction="column">
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
        <Outlet />
      </Flex>
      <Flex
        h="35vh"
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
      <Flex h="20vh" bg="gray.500" w="100%" direction="column">
        <h2>Cookies</h2>
        <h2>Privacity</h2>
        {/* <Cookies text="Cookies" linkTo="/spotify-clone/cookies" /> */}
        {/* <Link text="Spotify" linkTo="/spotify-clone"></Link> */}
      </Flex>
    </VStack>
  );
}

export default Sidebar;
