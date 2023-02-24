import { VFlow } from "bold-ui";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <VFlow>
      <Navbar />
      <Home />
    </VFlow>
  );
}

export default App;
