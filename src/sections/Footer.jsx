import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>JAINIL KUKROLIA </p>
        <p>|</p>
        <a href="https://github.com/joie17" target="_blank">
          Git-Hub
        </a>
      </div>

      <div className="flex gap-3">
        <div className="w-7/2 h-7/2 rounded-full  flex items-center justify-center shadow">
          <a
            href="https://github.com/joie17"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/github.svg"
              alt="GitHub"
              className="w-6 h-6 object-contain"
            />
          </a>
        </div>

        <div className="w-6/2 h-6/2 rounded-full  flex items-center justify-center shadow">
          <a
            href="https://www.linkedin.com/in/kukrolia-jainil/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/assets/linkedin.png"
              alt="linkedin"
              className="w-6 h-6 object-contain"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
