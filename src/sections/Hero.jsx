import { PerspectiveCamera, Ring } from "@react-three/drei";
import React, { Suspense } from "react";
import HackerRoom from "../component/HackerRoom";
import CanvasLoader from "../component/CanvasLoader";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constant";
import Target from "../component/Target";
import ReactLogo from "../component/ReactLogo";
import RotatingText from "../component/RotatingText";
import Cam from "../component/Cam";
import Rings from "../component/Rings";
import HeroCamera from "../component/HeroCamera";
import Button from "../component/Button";

const Hero = () => {
  // HackerRoom controls (currently disabled)
  /*
  const {
    positionX,
    positionY,
    positionZ,
    rotationX,
    rotationY,
    rotationZ,
    scale,
  } = useControls("HackerRoom", {
    positionX: { value: 2.5, min: -10, max: 10 },
    positionY: { value: 2.5, min: -10, max: 10 },
    positionZ: { value: 2.5, min: -10, max: 10 },
    rotationX: { value: 0, min: -Math.PI, max: Math.PI },
    rotationY: { value: 0, min: -Math.PI, max: Math.PI },
    rotationZ: { value: 0, min: -Math.PI, max: Math.PI },
    scale: { value: 1, min: 0.1, max: 10 },
  });
  */

  // Cam controls via Leva
  // const {
  //   camX,
  //   camY,
  //   camZ,
  //   camRotationX,
  //   camRotationY,
  //   camRotationZ,
  //   camScale,
  // } = useControls("Polaroid Cam", {
  //   camX: { value: -210.58, min: -300, max: 300 },
  //   camY: { value: 70.458, min: -100, max: 150 },
  //   camZ: { value: 25.742, min: -100, max: 100 },
  //   camRotationX: { value: Math.PI, min: -Math.PI, max: Math.PI },
  //   camRotationY: { value: 0, min: -Math.PI, max: Math.PI },
  //   camRotationZ: { value: 0, min: -Math.PI, max: Math.PI },
  //   camScale: { value: 0.01, min: 0.001, max: 0.1 },
  // });

  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
  const sizeCal = calculateSizes(isSmall, isMobile, isTablet);
  console.log("Ring position:", sizeCal.ringPosition);

  return (
    <section className="min-h-screen w-full flex flex-col relative  " id="home">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
          Hi, I am Jainil Kukrolia <span className="waving-hand">👋🏻</span>
        </p>
        <RotatingText />
      </div>

      {/* Canvas + Controls */}
      <div className="w-full h-full absolute inset-0">
        <Leva collapsed={false} />
        <Canvas className="w-full h-full">
          <Suspense fallback={<CanvasLoader />}>
            <PerspectiveCamera makeDefault position={[0, 0, 20]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom
                scale={sizeCal.deskScale}
                position={sizeCal.deskPosition}
                rotation={[0, -Math.PI, 0.0]}
              />
            </HeroCamera>

            <group>
              <Target position={sizeCal.targetPosition} />
              <ReactLogo position={sizeCal.reactLogoPosition} />
              {/* Use Leva-controlled Cam */}
              {/* <Cam
                position={[camX, camY, camZ]}
                rotation={[camRotationX, camRotationY, camRotationZ]}
                scale={camScale}
              /> */}
              {/* Or static Cam fallback (for testing) */}
              {/* <Cam position={[10, 20, 30]} rotation={[0, 0, 0]} scale={1} /> */}
              <Cam
                position={sizeCal.cubePosition}
                rotation={[0, 0, 0]}
                scale={1}
              />
              {/* <Rings position={sizeCal.ringPosition} /> */}
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
        <a href="#about" className="w-fit">
          <Button
            name="Let's Work Together"
            isBeam
            containerClass="sm:w-fit w-full sm:min-w-96"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
