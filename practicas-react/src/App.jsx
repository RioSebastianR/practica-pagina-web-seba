import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider, Box } from "@chakra-ui/react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SpotifyClone from "./pages/SpotifyClone";
import NetflixClone from "./pages/NetflixClone";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spotify-clone" element={<SpotifyClone />} />
          <Route path="/netflix-clone" element={<NetflixClone />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <Box className="App"></Box> */}
    </ChakraProvider>
  );
}

export default App;
