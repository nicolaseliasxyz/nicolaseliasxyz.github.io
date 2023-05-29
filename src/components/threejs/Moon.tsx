import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import moonTexture from "../../assets/8k_moon.jpg";

function Moon() {
  const moon = useLoader(TextureLoader, moonTexture);
  return (
    <mesh rotation={[0, 0, 0]} scale={[2, 2, 2]}>
      <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
      <meshStandardMaterial map={moon} />
      <mesh position={[0, 0, 0]} scale={[1.02, 1.02, 1.02]}>
        <sphereBufferGeometry attach="geometry" args={[1, 32, 32]} />
        <meshStandardMaterial
          attach="material"
          color="#ffffff"
          transparent
          opacity={0.1}
        />
      </mesh>
    </mesh>
  );
}

export default Moon;
