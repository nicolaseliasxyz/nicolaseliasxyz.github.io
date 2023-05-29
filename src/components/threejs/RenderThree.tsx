import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Moon from "./Moon";
import "../../index.css";
import { useRef } from "react";

function RenderThree() {
  return (
    <div style={{ height: "30rem" }}>
      <Canvas>
        <OrbitControls autoRotate enableDamping autoRotateSpeed={3} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[-2, 5, 2]} intensity={0.5} />
        <Stars />
        <Moon />
      </Canvas>
    </div>
  );
}

export default RenderThree;
