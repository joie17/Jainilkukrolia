export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#project",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    // title: "Podcastr - AI Podcast Platform",
    // desc: "Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.",
    // subdesc:
    //   "Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.",
    title: "SmartClass - IoT Dashboard System",
    desc: "SmartClass is a next-gen IoT-powered system that redefines the digital classroom experience. With real-time updates using an ESP32, LED matrix, and time module, it dynamically displays current lecture info like subject, faculty, semester, and more.",
    subdesc:
      "Built as a smart IoT-based solution using ESP32, MAX7219 LED matrix, RTC module, and Bluetooth connectivity, SmartClass allows teachers or admins to change the displayed message directly from their phone with just one click. Designed for modern classrooms, it blends embedded systems and wireless control to enhance digital learning and communication.",

    href: "https://github.com/joie17/-Classroom-Dashboard-System---IoT-Project",
    liveSite:
      "https://github.com/joie17/-Classroom-Dashboard-System---IoT-Project",
    texture: "/textures/project/project1.mp4",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "ESP32",
        path: "/assets/esp32.png",
      },
      {
        id: 2,
        name: "Arduino",
        path: "/assets/arduino.jpeg",
      },
      // {
      //   id: 3,
      //   name: "Bluetooth Terminal App",
      //   path: "/assets/bluetooth.png",
      // },
      // {
      //   id: 4,
      //   name: "MAX7219 LED Matrix",
      //   path: "/assets/ledmatrix.png",
      // },
    ],
  },
  {
    title: "EasyMid – Make Your Mid Easy",
    desc: "EasyMid is a smart and user-friendly web platform designed to simplify the upload, approval, and access of mid-semester and remedial papers in colleges. It bridges the gap between students and faculty by digitizing the entire process.",
    subdesc:
      "Currently active at GEC Dahod, EasyMid is used by all students and faculty across departments for uploading, approving, and exploring exam papers. Built using PHP, MySQL, and Tailwind CSS, it delivers a clean UI, real-time status tracking, and fast workflows — everything made easy.",

    liveSite: "https://easymid.42web.io/?i=1",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/project-logo2.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "PHP",
        path: "/assets/php2.png",
      },
      {
        id: 2,
        name: "MySQL",
        path: "/assets/mysql.png",
      },
      {
        id: 3,
        name: "Tailwind CSS",
        path: "/assets/tailwindcss.png",
      },
      {
        id: 4,
        name: "JavaScript",
        path: "/assets/js.png",
      },
      {
        id: 5,
        name: "HTML5",
        path: "/assets/html.png",
      },
      {
        id: 6,
        name: "CSS3",
        path: "/assets/css3.png",
      },
    ],
  },
  {
    title: "Employee Management System",
    desc: "A fully frontend-based CRUD app using Local Storage.",
    subdesc:
      "Built using HTML, CSS, and JavaScript, this project allows users to add, edit, and delete employee records using browser local storage. Designed with a clean UI and responsive table display",
    liveSite: "https://github.com/joie17/employee-management-system",

    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "JavaScript",
        path: "/assets/js.png",
      },
      {
        id: 4,
        name: "Local Storage",
        path: "/assets/localstorage.png",
      },
    ],
  },
  {
    title: "Shorten URL - Smart Link Shortener",
    desc: "Shorten URL is a clean and efficient URL shortening service that allows users to convert long, cluttered links into short, shareable URLs. It offers quick redirection and an easy-to-use interface for managing links.",
    subdesc:
      "Built with Node.js, Express, MongoDB, and EJS, Shorten URL ensures a fast and seamless experience for users who need reliable and minimal URL shortening functionality.",

    liveSite: "https://shorten-urlweb.onrender.com/",
    // texture: "/textures/project/project4.mp4",
    texture: "/textures/project/project4.mp4",

    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Node.js",
        path: "/assets/nodejs3.png",
      },
      {
        id: 2,
        name: "Express.js",
        path: "/assets/expressjs.png",
      },
      {
        id: 3,
        name: "HTML5",
        path: "/assets/html.png",
      },
      {
        id: 4,
        name: "CSS3",
        path: "/assets/css3.png",
      },
    ],
  },
  // {
  //   title: "Imaginify - AI Photo Manipulation App",
  //   desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
  //   subdesc:
  //     "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
  //   href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
  //   texture: "/textures/project/project5.mp4",
  //   logo: "/assets/project-logo5.png",
  //   logoStyle: {
  //     backgroundColor: "#1C1A43",
  //     border: "0.2px solid #252262",
  //     boxShadow: "0px 0px 60px 0px #635BFF4D",
  //   },
  //   spotlight: "/assets/spotlight5.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Framer Motion",
  //       path: "/assets/framer.png",
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-12, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Indian Space Lab",
    pos: "Intern – Technical Research & Concept",
    duration: "2022 – Present",
    title:
      "Participated in the India Space Lab internship program, focusing on Drone Technology and IoT-based research. Developed high-level concepts for drone systems and Air‑Taxi ideas, contributed to early-stage prototyping and visualizations, and assisted in developing space-tech modules aligned with public outreach initiatives.",
    icon: "/assets/space3.png",
    animation: "salute",
  },
  {
    id: 2,
    name: "Amici Infotech",
    pos: "PHP Developer Intern",
    duration: "Aug-2025",
    title:
      "Completed a hands-on internship at Amici Infotech as a PHP Developer, where I built a real-world college project using PHP, MySQL, and Tailwind CSS. Developed full-stack modules including a dynamic admin and student dashboard, integrated database functionality, and implemented clean, responsive UI using Tailwind. Gained practical experience in backend development, data handling, and real-time dashboard interactions.",
    icon: "/assets/amici2.png",
    animation: "clapping",
  },
  {
    id: 3,
    name: "GEC Dahod",
    pos: "Arduino Hackathon Leader & Content Head",
    duration: "2023 - 2024",
    title:
      "Led the Arduino Hackathon at GEC Dahod, guiding participants through hands-on hardware problem-solving. Also served as the Content Head for the Tech Fest, where I created event content, designed posters, shot and edited reels, and managed overall digital presence.",
    icon: "/assets/gec.png",

    animation: "clapping",
  },
];
