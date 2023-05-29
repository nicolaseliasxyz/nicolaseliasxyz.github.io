import { VFlow } from "bold-ui";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import { css } from "@emotion/core";

function App() {
  return (
    <VFlow
      vSpacing={10}
      style={css`
        overflow-x: hidden;
        width: 100vw;
        max-width: 100%;
      `}
    >
      <Navbar />
      <VFlow>
        <Outlet />
        <MusicPlayer />
        <Footer />
      </VFlow>
    </VFlow>
  );
}

export default App;
