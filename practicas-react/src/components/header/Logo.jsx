import React from "react";

import { HStack, Icon, Box } from "@chakra-ui/react";
import { BsFillPieChartFill } from "react-icons/bs";

function Logo() {
  return (
    <HStack>
      <Icon as={BsFillPieChartFill} w={6} h={6} />
      <Box>Gallery Projects</Box>
    </HStack>
  );
}

export default Logo;
