import React from "react";
import { PhoneIcon, AddIcon, WarningIcon } from "@chakra-ui/icons";

import {
  InputLeftElement,
  InputGroup,
  Link,
  VStack,
  Button,
  Text,
  Box,
  Input,
  Flex,
  Spacer,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

// TODO: hacer pagina de login alignContent="center" margintop="center" marginBottom="center"

function Register() {
  return (
    <Flex
      justify="center"
      alignItems="center"
      height="150vh"
      bgImage="url('/images/imagen4.jpeg')"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <VStack
        spacing="2"
        p="20px"
        borderRadius="10px"
        bgColor="#ffedd8"
        width="32%"
        borderStyle="solid"
        borderColor="#C6F6D5"
        direction="column"
        border="solid"
        height="auto"
      >
        <Text
          m="2vh"
          as="h1"
          fontSize="3xl"
          fontFamily="bold"
          textColor="Black.200"
          bgColor="#C6F6D5"
          borderRadius="10xp"
          border="solid"
        >
          Registrarse
        </Text>
        <FormControl>
          <FormLabel>User Name / Email</FormLabel>
          <Input bgColor="white" type="email" placeholder="example@gmail.com" />
          <FormHelperText>Email</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input bgColor="white" type="password" placeholder="******" />
          <FormHelperText>Password</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Date of Birth?</FormLabel>
          <Input
            margin={2}
            htmlSize={5}
            width="auto"
            bgColor="white"
            type="email"
            size="sm"
            placeholder="Day"
          />
          <Input
            margin={2}
            htmlSize={5}
            width="auto"
            bgColor="white"
            type="email"
            size="sm"
            placeholder="Month"
          />
          <Input
            margin={2}
            htmlSize={5}
            width="auto"
            bgColor="white"
            type="email"
            size="sm"
            placeholder="Year"
          />
        </FormControl>
        <FormControl>
          <FormLabel>Number Contact</FormLabel>
          <InputGroup>
            <InputLeftElement
              bg="white"
              pointerEvents="none"
              children={<PhoneIcon color="gray.300" />}
            />
            <Input bgColor="#C6F6D5" type="tel" placeholder="Phone number" />
          </InputGroup>
        </FormControl>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <InputGroup placeholder="Select country">
            <option>Argentina</option>
            <option>EE.UU</option>
          </InputGroup>
        </FormControl>

        <Button color="white" bgColor="orange.800">
          Registrarse
        </Button>

        <Text as="h5" fontSize="md">
          © 2017–2022
        </Text>
      </VStack>
    </Flex>
  );
}

export default Register;
