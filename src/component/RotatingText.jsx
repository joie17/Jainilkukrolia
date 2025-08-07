import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const words = ["Canvas.", "Web.", "Visual.", "Jainil"];

const RotatingText = () => {
  const textRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Animate out
      gsap.to(textRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.7,
        onComplete: () => {
          setIndex((prev) => (prev + 1) % words.length);
          // Animate in
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.7 }
          );
        },
      });
    }, 2500); // every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <p className="hero_tag text-white text-center text-2xl sm:text-5xl">
      Code Meets{" "}
      <span
        ref={textRef}
        style={{
          display: "inline-block",
          marginLeft: "8px",
          fontWeight: "bold",
          color: "#ffffff", // Ensures visibility
        }}
      >
        {words[index]}
      </span>
    </p>
  );
};

export default RotatingText;
