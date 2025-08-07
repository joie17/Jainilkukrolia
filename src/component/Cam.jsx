import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cam = (props) => {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF("/models/polaroid_cam.glb");

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      // No full rotation; subtle floating and slight tilt to simulate motion
      groupRef.current.rotation.x = 0.1 * Math.sin(t * 1); // slow sway on X axis
      groupRef.current.rotation.z = 0.1 * Math.cos(t * 1); // slow sway on Z axis

      // Floating up and down smoothly
      groupRef.current.position.y =
        (props.position?.[1] || 0) + Math.sin(t * 1.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} {...props} dispose={null}>
      {/* Localized lights */}
      <pointLight
        color="white"
        intensity={1.2}
        position={[5, 5, 5]}
        distance={20}
        decay={2}
      />
      <spotLight
        color="white"
        intensity={0.8}
        position={[-5, 10, 5]}
        angle={0.3}
        penumbra={0.5}
        castShadow
      />

      <group scale={0.013}>
        <group
          position={[-130.58, 20.458, 25.742]}
          rotation={[Math.PI, 0, 0]}
          scale={[5.514, 5.514, 2.618]}
        >
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camera_polaroid001_principal_colors_0.geometry}
            material={materials.principal_colors}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.camera_polaroid001_lens_0.geometry}
            material={materials.lens}
          />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/polaroid_cam.glb");

export default Cam;
