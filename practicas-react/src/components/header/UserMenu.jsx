import React from "react";

import {
  HStack,
  MenuButton,
  Menu,
  Button,
  MenuItem,
  MenuList,
  Box,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { MdSettings } from "react-icons/md";

function UserMenu() {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        <HStack>
          <Icon as={MdSettings} w={6} h={6} />
          <Box>Settings</Box>
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem>Download</MenuItem>
        <MenuItem>Create a Copy</MenuItem>
        <MenuItem>Mark as Draft</MenuItem>
        <MenuItem>Delete</MenuItem>
        <MenuItem>Attend a Workshop</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserMenu;
