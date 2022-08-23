import React from "react";
import {
  VStack,
  Button,
  Text,
  Box,
  Input,
  Flex,
  Spacer,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

// TODO: hacer pagina de login alignContent="center" margintop="center" marginBottom="center"

function Login() {
  return (
    <Flex
      justify="center"
      alignItems="center"
      height="100vh"
      bgImage="url('/images/imagen4.jpeg')"
      bgPosition="center"
      bgRepeat="no-repeat"
    >
      <VStack
        spacing="22px"
        p="20px"
        borderRadius="3px"
        bgColor="#ffedd8"
        width="30%"
        borderStyle="solid"
        borderColor="orange.400"
        direction="column"
      >
        <Text as="h1" fontSize="3xl">
          Por favor inicia sesion
        </Text>
        <FormControl>
          <FormLabel>Usuario</FormLabel>
          <Input bgColor="white" type="email" />
          <FormHelperText>Correo electronico</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input bgColor="white" type="password" />
          <FormHelperText>Contraseña</FormHelperText>
        </FormControl>
        <Button color="white" bgColor="orange.800">
          Iniciar Sesion
        </Button>
        <Text as="h4" fontSize="xl">
          Si aun no te has registrado, hazlo
        </Text>
        <Text as="h5" fontSize="md">
          © 2017–2022
        </Text>
      </VStack>
    </Flex>
  );
}

export default Login;
