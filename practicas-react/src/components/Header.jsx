import React from "react";

import Logo from "./header/Logo";
import SearchBox from "./header/SearchBox";
import UserMenu from "./header/UserMenu";

import { HStack, Spacer } from "@chakra-ui/react";

function Header() {
  return (
    <HStack
      spacing="24px"
      borderBottom="1px"
      borderBottomColor="gray.200"
      p="3"
    >
      <Logo />
      <Spacer />
      <SearchBox />
      <Spacer />
      <UserMenu />
    </HStack>
  );
}

export default Header;
