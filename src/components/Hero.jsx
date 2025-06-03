import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../data";

function Hero() {
  return (
    <motion.section
      id="hero"
      className="h-screen flex items-center justify-center relative"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl mb-6 text-gray-300">
            <TypeAnimation
              sequence={[`${personalInfo.title}`, 2000, "", 1000]}
              wrapper="span"
              speed={50}
              repeat={Number.POSITIVE_INFINITY}
            />
          </h2>
          <div className="flex justify-center space-x-4 mb-8">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl hover:text-blue-400 transition-colors"
              aria-label="Visit my GitHub profile"
              title="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl hover:text-blue-400 transition-colors"
              aria-label="Visit my LinkedIn profile"
              title="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 text-2xl hover:text-blue-400 transition-colors"
              aria-label="Send me an email"
              title="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          <div className="flex justify-center space-x-4">
            <a
              href="/Deepak_Suthar_Resume.pdf"
              download
              aria-label="Download my resume"
              title="Download Resume"
              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="px-6 py-3 border border-blue-400 rounded-full font-medium hover:bg-blue-400/10 transition-all duration-300"
            >
              View Projects
            </a>
      
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </motion.section>
  );
}

export default Hero;
