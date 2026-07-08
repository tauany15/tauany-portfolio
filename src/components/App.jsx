import React, { useState, useEffect } from "react";
import { ArrowUp, Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const sections = ["home", "projects", "about", "skills", "contact"];

// Navigation Component
function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <ul className="flex justify-start sm:justify-center gap-4 sm:gap-8 py-4 px-4 overflow-x-auto whitespace-nowrap">
        {sections.map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className={`capitalize text-sm sm:text-base font-medium transition-all duration-300 ${
                activeSection === section
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-600 hover:text-purple-500"
              }`}
            >
              {section}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

// Hero Section
function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 text-center px-6 pt-16"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">
          Hi, I'm Tauany <span className="inline-block animate-pulse">✨</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-700 font-semibold mb-6">
          Software Developer
        </h2>

        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          I build accessible, user-focused web applications with React and JavaScript.
          Background in Support & QA. Strong debugging and problem-solving skills.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 bg-purple-600 text-white font-medium rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all"
          >
            View My Projects
          </button>
        </div>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const projects = [
    {
      name: "EcoWatch",
      description:
        "A data-driven web application that highlights endangered species in cold biomes using real environmental APIs.",
      role: "I designed and built the frontend with React to fetch, process, and present live data in a clean, responsive UI, focusing on usability and performance.",
      tech: ["React", "JavaScript", "Express", "Vite", "Tailwind CSS", "REST APIs"],
      github: "https://github.com/tauany15/ecowatch",
      demo: "https://tauany15.github.io/ecowatch",
    },
    {
      name: "Memory Game",
      description:
        "An interactive browser game focused on state management, user interaction, and responsive layout design.",
      role: "Built with React and JavaScript, featuring dynamic card shuffling, win tracking, and smooth UI updates across screen sizes.",
      tech: ["React", "JavaScript", "Vite", "Tailwind CSS"],
      github: "https://github.com/tauany15/memory-game",
      demo: "https://tauany15.github.io/memory-game",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Projects
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are two selected projects that demonstrate my experience building modern, user-focused web applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-purple-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <h3 className="text-2xl font-bold mb-3 text-gray-900">
                {project.name}
              </h3>
              <p className="text-gray-700 mb-3 leading-relaxed">
                {project.description}
              </p>
              <p className="text-gray-600 text-sm italic mb-4">
                {project.role}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white bg-purple-600 px-4 py-2 rounded-full hover:bg-purple-700 transition-all text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Code
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-purple-700 bg-purple-100 px-4 py-2 rounded-full hover:bg-purple-200 transition-all text-sm font-medium"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 px-6"
    >
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            About Me
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            I’m Tauany Silva Santos, a Software Developer with a strong focus on building clean, accessible, and user-friendly web applications. I work primarily with React and JavaScript, and I enjoy turning complex problems into simple, reliable solutions.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            My background in Software QA and Technical Support has shaped how I build software, with attention to detail, usability, and real user needs. I hold a{" "}
            <span className="font-semibold text-purple-700">
              Bachelor's in Information Systems
            </span>{" "}
            from the Federal University of Minas Gerais, completed the{" "}
            <span className="font-semibold text-purple-700">
              Front-End Developer course at McMaster University
            </span>{" "}
            and expanded my skills through{" "}
            <span className="font-semibold text-purple-700">
              The Complete 2023 Web Development Bootcamp on Udemy
            </span>
            .
          </p>
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-purple-600 text-white font-medium rounded-full hover:bg-purple-700 hover:scale-105 transition-all shadow-lg"
          >
            View My Projects
          </button>
        </div>

        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl blur-xl opacity-30"></div>
            <img
              src={`${process.env.PUBLIC_URL}/photo.jpeg`}
              alt="Tauany Silva Santos"
              className="relative rounded-2xl shadow-2xl w-64 md:w-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// Skills Section
function Skills() {
  const skills = {
    Frontend: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS"],
    Backend: ["Node.js", "Express", "Java", "Spring Boot"],
    Database: ["SQL", "Microsoft SQL Server"],
    Testing: ["Manual Testing", "Playwright"],
    Tools: ["Git / GitHub", "NPM", "Vite", "AWS", "Jenkins"],
  };

  return (
    <section id="skills" className="py-20 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Skills
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Technologies and tools I work with to build amazing web experiences.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {Object.entries(skills).map(([category, skillList], idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-purple-50 p-6 rounded-2xl shadow-md"
            >
              <h3 className="text-2xl font-bold mb-4 text-gray-900">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skillList.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium text-sm hover:scale-105 hover:bg-purple-200 transition-all cursor-default shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
          Get In Touch
        </h2>
        <p className="text-gray-700 mb-10 text-lg leading-relaxed">
          Interested in working together or just want to say hi? Let's
          connect! I'd love to hear from you!
        </p>

        <a
          href={`${process.env.PUBLIC_URL}/Tauany_Resume.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-purple-600 text-white font-medium rounded-full shadow-lg hover:bg-purple-700 hover:scale-105 transition-all mb-12"
        >
          Download Resume
        </a>

        <div className="flex justify-center gap-8 flex-wrap">
          <a
            href="https://github.com/tauany15"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-all font-medium text-lg"
          >
            <Github size={24} />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/tauanyssantos"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-all font-medium text-lg"
          >
            <Linkedin size={24} />
            LinkedIn
          </a>
          <a
            href="mailto:tauany.santoss@gmail.com"
            className="flex items-center gap-2 text-gray-700 hover:text-purple-600 transition-all font-medium text-lg"
          >
            <Mail size={24} />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}

// Back to Top Button
function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return visible ? (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 hover:scale-110 transition-all z-40"
      aria-label="Back to top"
    >
      <ArrowUp size={24} />
    </button>
  ) : null;
}

// Footer
function Footer() {
  return (
    <footer className="bg-purple-100 text-gray-700 text-center py-6">
      <p className="text-sm">Developed with ❤️ by Tauany</p>
    </footer>
  );
}

// Main App
export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
      <BackToTop />
      <Footer />
    </div>
  );
}
