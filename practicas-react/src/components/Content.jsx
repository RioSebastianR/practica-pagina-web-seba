import React from "react";

import { Flex, Text, HStack } from "@chakra-ui/react";

import Card from "./../components/Card";

function Content() {
  const loginImageProps = {
    url: "https://img.freepik.com/vector-gratis/plantilla-login_1017-6719.jpg",
    alt: "Login",
  };

  const spotifyImageProps = {
    url: "https://www.scdn.co/i/_global/open-graph-default.png",
    alt: "Spotify",
  };

  const netflixImageProps = {
    url: "https://s1.eestatic.com/2022/03/24/actualidad/659694554_222967910_864x486.jpg",
    alt: "Netflix",
  };

  return (
    <Flex align="center" justify="center" w="100%" h="90vh">
      <HStack gap={4}>
        <Card title="Login" image={loginImageProps} linkTo="login" />
        <Card
          title="Spotify Clone"
          image={spotifyImageProps}
          linkTo="spotify-clone"
        />
        <Card
          title="Netflix"
          image={netflixImageProps}
          linkTo="netflix-clone"
        />
      </HStack>
    </Flex>
  );
}

export default Content;
