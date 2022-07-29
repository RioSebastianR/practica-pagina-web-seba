import "./App.css";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

import { ChakraProvider, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box className="App">
        <Header />
        <Content />
        <Footer />
      </Box>
    </ChakraProvider>
  );
}

export default App;
