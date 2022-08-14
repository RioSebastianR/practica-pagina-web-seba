import React from "react";
import { Box, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Card(props) {
  const { title, image, linkTo } = props;

  return (
    <Link to={linkTo}>
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={image.url} alt={image.alt} />
        <Box p="6">
          <Box display="flex" alignItems="baseline">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              noOfLines={1}
            >
              {title}
            </Box>
          </Box>
        </Box>
      </Box>
    </Link>
  );
}

export default Card;
