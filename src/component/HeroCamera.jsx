import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";

const HeroCamera = ({ children, isMobile }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    // Smoothly move the camera to position [0, 0, 20]
    easing.damp3(state.camera.position, [0, 0, 22], 0.35, delta);

    // If not on mobile, add a little rotation to the group
    if (!isMobile && groupRef.current) {
      easing.dampE(
        groupRef.current.rotation,
        [-state.pointer.y / 3, -state.pointer.x / 5, 0],
        0.25,
        delta
      );
    }
  });

  return (
    <group ref={groupRef} scale={isMobile ? 0.9 : 1.3}>
      {children}
    </group>
  );
};

export default HeroCamera;
