import { motion } from "framer-motion"
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { personalInfo, aboutData } from "../data";
function About() {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">{aboutData.description}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
  <a
    href="mailto:suthardeepak257@gmail.com"
    className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-600 transition"
    aria-label="Send email"
  >
    <FaEnvelope className="text-blue-400" />
    <span>suthardeepak257@gmail.com</span>
  </a>
  {/* <a
    href="https://maps.google.com/?q=Mumbai"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full hover:bg-gray-600 transition"
    aria-label="View location on Google Maps"
  >
    <FaMapMarkerAlt className="text-blue-400" />
    <span>Mumbai</span>
  </a> */}
  <a
    href="/Deepak_Suthar_Resume.pdf"
    download
    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
    aria-label="Download Resume"
  >
    <span>Download Resume</span>
  </a>
</div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
