import React from "react";
import { VStack, HStack, Flex, Link, Text } from "@chakra-ui/react";
import PlaylistCard from "./playlist/PlaylistCard";

function HomePlaylists() {
  return (
    <VStack w="100%" spacing={5}>
      <Flex w="100%" dir="row" justify="space-between" fontsize="4xl">
        <Link>
          <Text as="b">Spotify Playlists</Text>
        </Link>
        <Link>
          <Text>Ver todo</Text>
        </Link>
      </Flex>
      <Flex>
        <HStack w="100%" spacing={5}>
          <PlaylistCard
            fontsize=""
            title="The best list"
            image={{
              url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-album-cover-image-design-template-62fca565fdcbb25ced8e900c54d61835_screen.jpg?ts=1561530580",
              alt: "The best list Image",
            }}
            linkTo="/playlists/lamejorlist"
          />
          <PlaylistCard
            title="Songs for Sleep"
            image={{
              url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-album-cover-image-design-template-62fca565fdcbb25ced8e900c54d61835_screen.jpg?ts=1561530580",
              alt: "Songs for Sleep Image",
            }}
            linkTo="/playlists/lamejorlist"
          />
          <PlaylistCard
            title="Last played "
            image={{
              url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-album-cover-image-design-template-62fca565fdcbb25ced8e900c54d61835_screen.jpg?ts=1561530580",
              alt: "Last played  Image",
            }}
            linkTo="/playlists/lamejorlist"
          />
          <PlaylistCard
            title="The most liked"
            image={{
              url: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-album-cover-image-design-template-62fca565fdcbb25ced8e900c54d61835_screen.jpg?ts=1561530580",
              alt: "The most liked Image",
            }}
            linkTo="/playlists/lamejorlist"
          />
        </HStack>
      </Flex>
    </VStack>
  );
}

export default HomePlaylists;
