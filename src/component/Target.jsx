import { useGLTF } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );

  useGSAP(() => {
    const sceneObj = targetRef.current.children[0]; // actual GLTF scene inside mesh

    if (sceneObj) {
      gsap.to(sceneObj.position, {
        y: sceneObj.position.y + 0.5,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
