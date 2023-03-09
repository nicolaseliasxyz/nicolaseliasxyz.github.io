import { VFlow } from "bold-ui";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <VFlow vSpacing={10}>
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
