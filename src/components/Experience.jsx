import { motion } from "framer-motion";
import { experienceData } from "../data";
function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
            Experience
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="relative pl-8 border-l-2 border-blue-400 mb-12">
              <div className="absolute w-4 h-4 bg-blue-400 rounded-full -left-[9px] top-0"></div>
              <div className="bg-gray-700/50 p-6 rounded-lg">
                <h3 className="text-xl font-bold">{experienceData[0].title}</h3>
                <p className="text-blue-400 mb-4">
                  {experienceData[0].company}
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  {experienceData[0].responsibilities.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;
