import React, { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../component/Button";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("jainilkukrolia@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  const handleScrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        {/* Grid 1 - Intro */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain "
            />
            <div>
              <p className="grid-headtext">Hi, I'm Jainil</p>
              <p className="grid-subtext pb-10">
                React Developer | Canva & Video Editor | Blending Code with
                Visual Creativity
              </p>
              <div className="pt-20">
                <a
                  // href="/assets/JAINILKD_CV5.pdf"
                  href="/assets/JAINIL_KUKROLIA_RESUME2.pdf"
                  target="_blank"
                  className="w-full"
                >
                  <Button
                    name=" Resume "
                    isBeam
                    containerClass="w-full mt-10"
                    onClick={handleScrollToContact}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grid 2 - Tech Stack */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="w-full sm:w-[276px] mx-auto h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Specialized in React.js for crafting dynamic web apps, skilled
                in design with tools like Canva & Figma, and familiar with
                Node.js for building robust backends — I bring code and
                creativity together.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 3 - Globe + Contact Button */}
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 23.0225,
                    lng: 72.5714,
                    text: "Ahmedabad",
                    size: 2.2,
                    color: "white",
                    altitude: 0.05,
                  },
                  {
                    lat: 22.8462,
                    lng: 74.2556,
                    text: "DAHOD",
                    size: 0.4,
                    color: "yellow",
                    altitude: 0.05,
                  },
                ]}
                labelText="text"
                labelSize="size"
                labelColor="color"
                labelAltitude="altitude"
              />
            </div>

            <div>
              <p className="grid-headtext">Location & Availability</p>
              <p className="grid-subtext">
                Based in Ahmedabad/Dahod, open to working from Ahmedabad or
                remotely from anywhere. I'm always ready to step outside my
                comfort zone to explore better opportunities and grow
                professionally.
              </p>
              <a href="#contact" className="w-full">
                <Button
                  name=" Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                  onClick={handleScrollToContact}
                />
              </a>
            </div>
          </div>
        </div>

        {/* ✅ Grid 4 - My Passion (Moved OUTSIDE globe box) */}
        <div className="xl:col-span-2 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm-h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My passion for coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Coding
                isn't just my profession — it is my passion.
              </p>
            </div>
          </div>
        </div>

        {/* Grid 5 - Contact Info */}
        <div className="xl:col-span-1 xl:row-span-2" id="contact">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
              alt="grid-4"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>

              {/* Email Copy */}
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt=""
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  jainilkukrolia@gmail.com
                </p>
              </div>

              {/* LinkedIn Link */}
              <div className="copy-container" onClick={handleCopy}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white hover:text-[#0A66C2] transition-colors duration-300 mr-2"
                >
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.327-.027-3.036-1.849-3.036-1.853 0-2.136 1.447-2.136 2.941v5.664H9.354V9h3.414v1.561h.049c.476-.9 1.637-1.849 3.37-1.849 3.602 0 4.267 2.369 4.267 5.451v6.289zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.777 13.019H3.561V9h3.553v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.225 0z"
                  />
                </svg>
                <a
                  href="http://linkedin.com/in/gecdhd-comp-kukrolia-jainil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="lg:text-2xl md:text-xl font-medium text-white hover:text-[#0A66C2] transition-colors duration-300"
                >
                  Kukrolia Jainil
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
