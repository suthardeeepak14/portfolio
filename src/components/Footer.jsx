import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="py-8 border-t border-gray-700 bg-gray-900 text-white  ">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://github.com/suthardeeepak14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/deepaksuthar1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-blue-400 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:suthardeepak257@gmail.com"
            className="text-xl hover:text-blue-400 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="text-gray-400 mb-4">
          Made with <span className="text-red-500">❤</span> by Deepak Suthar
        </p>
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Deepak Suthar. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
