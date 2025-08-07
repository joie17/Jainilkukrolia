import React, { Suspense, useState } from "react";
import { myProjects } from "../constant";
import { Canvas } from "@react-three/fiber";
import { Center, OrbitControls } from "@react-three/drei";
import CanvasLoader from "../component/CanvasLoader";
import { Group } from "three/examples/jsm/libs/tween.module.js";
import DemoComputer from "../component/DemoComputer";

const Project = () => {
  const [selectedProjectIndex, setselectedProjectIndex] = useState(0);
  const currentProject = myProjects[selectedProjectIndex];

  const handleNavigartion = (direction) => {
    setselectedProjectIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % myProjects.length;
      } else if (direction === "previous") {
        return (prevIndex - 1 + myProjects.length) % myProjects.length;
      }
    });
  };

  return (
    <section className="c-space my-20 " id="project">
      <p className="head-text">My Projects</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full ">
        {/* Left Side: Project Display */}
        <div className="flex flex-col gap-5 sm:p-5 py-5 shadow-2xl shadow-black-200 rounded-xl bg-black-100 relative">
          {/* Image + Logo */}
          <div>
            <img
              src={currentProject.spotlight}
              alt="spotlight"
              className="w-full h-20 object-cover rounded-xl"
            />
            <div
              className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg mt-4"
              style={currentProject.logoStyle}
            >
              <img
                src={currentProject.logo}
                alt="logo"
                className="w-10 h-10 shadow-sm"
              />
            </div>
          </div>

          {/* Text Info */}
          <div className="flex flex-col gap-5 text-white-600">
            <p className="text-white text-2xl font-semibold animatedText">
              {currentProject.title}
            </p>
            <p className="animatedText">{currentProject.desc}</p>
            <p className="animatedText">{currentProject.subdesc}</p>
          </div>

          {/* Tags + Link */}
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo">
                  <img
                    src={tag.path}
                    alt={tag.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
              ))}
            </div>

            <a
              href={currentProject.liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white cursor-pointer"
            >
              <p>check live site</p>
              <img src="/assets/arrow-up.png" className="w-3 h-3" alt="arrow" />
            </a>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between flex-wrap mt-7">
            <button
              className="arrow-btn"
              onClick={() => handleNavigartion("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigartion("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="right arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>

        {/* Right Side: Canvas */}
        <div className="border border-black-300 bg-black-200 rounded-lg h-80 md:h-full">
          {/* <Canvas>
            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Center />
            <Suspense fallback={<CanvasLoader />}>
              <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                <DemoComputer />
              </group>
            </Suspense>
          </Canvas> */}

          <Canvas>
            <ambientLight intensity={Math.PI / 2} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <Center>
              <Suspense fallback={<CanvasLoader />}>
                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                  <DemoComputer texture={currentProject.texture} />
                </group>
              </Suspense>
            </Center>
            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Project;
