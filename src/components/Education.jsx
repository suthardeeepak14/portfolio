import { motion } from "framer-motion"
import { educationData } from "../data";
function Education() {
  return (
    <section id="education" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
            Education
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {educationData.map((edu, index) => (
              <div key={index} className="bg-gray-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold">{edu.degree}</h3>
                <p className="text-blue-400 mb-2">
                  {edu.institution} | {edu.period}
                </p>
                <p className="text-gray-300">CGPA: {edu.cgpa}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;
