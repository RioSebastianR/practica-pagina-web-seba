import React from "react";
import { Text, HStack, VStack, Box } from "@chakra-ui/react";
import Sidebar from "../components/spotify-clone/Sidebar";
import Content from "../components/spotify-clone/Content";
import Player from "../components/spotify-clone/Player";

function SpotifyClone() {
  return (
    <>
      <HStack gap="0" p="0">
        <Sidebar />
        <Content />
      </HStack>
      <Player />
    </>
  );
}

export default SpotifyClone;
