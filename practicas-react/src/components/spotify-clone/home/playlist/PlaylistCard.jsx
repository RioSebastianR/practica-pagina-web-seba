import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function PlaylistCard(props) {
  const { title, image, linkTo } = props;

  return (
    <Link to={linkTo}>
      <Box
        maxW="sm"
        borderWidth="1.5px"
        borderRadius="15px"
        overflow="hidden"
        p="3"
        borderColor="red"
      >
        <Image
          src={image.url}
          alt={image.alt}
          boxSize="220px"
          objectFit="contain"
        />
        <Box
          p="0"
          m="1"
          borderRadius="2px"
          borderColor="red"
          borderWidth="1.5px"
        >
          <Box display="flex" alignItems="baseline">
            <Box
              mt="1"
              ml="0"
              mr="0"
              mb="1"
              fontWeight="semibold"
              as="h3"
              lineHeight="tight"
              noOfLines={1}
            >
              {title}
            </Box>
            {/* <Text as="h3">
              HOLAmu ndosdas dsadad sdasdadsad dasdadas dasdafafa
            </Text> */}
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default PlaylistCard;
