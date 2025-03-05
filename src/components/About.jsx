import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { personalInfo, aboutData } from "../data";
function About() {
  return (
    <section id="about" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 relative inline-block">
            About Me
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
          </h2>
          <p className="text-lg text-gray-300 mb-6">{aboutData.description}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full">
              <FaEnvelope className="text-blue-400" />
              <span>suthardeepak257@gmail.com</span>
            </div>

            <div className="flex items-center gap-2 bg-gray-700/50 px-4 py-2 rounded-full">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Mumbai</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
