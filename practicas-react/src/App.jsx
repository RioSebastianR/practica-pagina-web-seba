import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import SpotifyClone from "./pages/SpotifyClone";
import NetflixClone from "./pages/NetflixClone";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import MenuCollection from "./components/spotify-clone/sidebar-menu/MenuCollection";
// import Cookies from "./spotify-clone/cookies";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/spotify-clone" element={<SpotifyClone />}>
            {/* <Route
              path="/components/spotify-clone/sidebar-menu/MenuCollection"
              element={<MenuCollection />}
            /> */}
            {/* <Route path="/collection/tracks" element={<Tracks />} /> */}
          </Route>
          {/* <Route path="/spotify-clone/cookies" element={<Cookies />} /> */}
          {/* <Route path="/spotify-clone/privacy-policy" element={<Privacy />} /> */}
          <Route path="/netflix-clone" element={<NetflixClone />} />
          <Route path="/Register" element={<Register />} />
          <Route />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      {/* <Box className="App"></Box> */}
    </ChakraProvider>
  );
}

export default App;
