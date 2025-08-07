import React, { useRef, useEffect } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";

const Developer = ({ animationsName = "idle", ...props }) => {
  const group = useRef();
  const headRef = useRef(); // 🔁 Head ko thoda aage jhukane ke liye

  const { nodes, materials } = useGLTF("/models/jainilmodel.glb");

  // Load animations
  const idleAnimations = useFBX("/models/animations/idle.fbx");
  const clappingAnimations = useFBX("/models/animations/clapping.fbx");
  const saluteAnimations = useFBX("/models/animations/salute.fbx");
  const victoryAnimations = useFBX("/models/animations/victory.fbx");

  // Rename animations for use
  idleAnimations.animations[0].name = "idle";
  clappingAnimations.animations[0].name = "clapping";
  saluteAnimations.animations[0].name = "salute";
  victoryAnimations.animations[0].name = "victory";

  // Merge animations into single array
  const animations = [
    idleAnimations.animations[0],
    clappingAnimations.animations[0],
    saluteAnimations.animations[0],
    victoryAnimations.animations[0],
  ];

  const { actions } = useAnimations(animations, group);

  // Play animation
  useEffect(() => {
    const action = actions[animationsName];
    if (action) {
      action.reset().fadeIn(0.5).play();
      return () => action.fadeOut(0.5);
    }
  }, [actions, animationsName]);

  // 💡 Rotate head forward
  useEffect(() => {
    if (headRef.current) {
      headRef.current.rotation.x = 0.78; // ~11 degrees forward tilt
    }
  }, []);

  return (
    <group {...props} dispose={null} ref={group} rotation={[0, Math.PI, 0]}>
      <primitive object={nodes.Hips} />
      <skinnedMesh
        name="EyeLeft"
        geometry={nodes.EyeLeft.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeLeft.skeleton}
        morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
      />
      <skinnedMesh
        name="EyeRight"
        geometry={nodes.EyeRight.geometry}
        material={materials.Wolf3D_Eye}
        skeleton={nodes.EyeRight.skeleton}
        morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
        morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Head"
        ref={headRef} // 🧠 Head ref here
        geometry={nodes.Wolf3D_Head.geometry}
        material={materials.Wolf3D_Skin}
        skeleton={nodes.Wolf3D_Head.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
      />
      <skinnedMesh
        name="Wolf3D_Teeth"
        geometry={nodes.Wolf3D_Teeth.geometry}
        material={materials.Wolf3D_Teeth}
        skeleton={nodes.Wolf3D_Teeth.skeleton}
        morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
        morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Hair.geometry}
        material={materials.Wolf3D_Hair}
        skeleton={nodes.Wolf3D_Hair.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Top.geometry}
        material={materials.Wolf3D_Outfit_Top}
        skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
        material={materials.Wolf3D_Outfit_Bottom}
        skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
        material={materials.Wolf3D_Outfit_Footwear}
        skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Wolf3D_Body.geometry}
        material={materials.Wolf3D_Body}
        skeleton={nodes.Wolf3D_Body.skeleton}
      />
    </group>
  );
};

export default Developer;

// Preload model for better performance
useGLTF.preload("/models/jainilmodel.glb");
