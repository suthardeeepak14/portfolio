import { motion } from "framer-motion"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { skillsData } from "../data";

function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
            Skills
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skillsData.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: index * 0.1 }}
                  
                  className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-xl hover:bg-gray-700/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                >
                  <Icon className={`text-4xl ${skill.color}`} />{" "}
                  <h3 className="mt-4 font-medium">{skill.name}</h3>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
