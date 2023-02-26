import { VFlow, Text } from "bold-ui";
import "./App.css";
import Github from "./components/Repositories";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sobre from "./components/Sobre";
import { css } from "@emotion/core";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <VFlow>
      <Navbar />
      <Outlet />
    </VFlow>
  );
}

export default App;
