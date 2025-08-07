import React from "react";
import { Float, useGLTF } from "@react-three/drei";

const ReactLogo = (props) => {
  const { nodes, materials } = useGLTF("/models/react.glb");

  return (
    <Float floatIntensity={1} speed={2} rotationIntensity={3} {...props}>
      <group dispose={null}>
        <group scale={0.5}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes["React-Logo_Material002_0"].geometry}
            material={materials["Material.002"]}
            position={[0, 0.079, 0.181]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.39, 0.39, 0.5]}
          />
        </group>
      </group>
    </Float>
  );
};

useGLTF.preload("/models/react.glb");

export default ReactLogo;
