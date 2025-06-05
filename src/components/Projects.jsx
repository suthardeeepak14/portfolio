import { motion } from "framer-motion"
import { projectsData } from "../data";

function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div
          
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center relative inline-block">
            Projects
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 ">
            {projectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: index * 0.2 }}
    
                whileHover={{ y: -10 }}
                className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div
                  className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}
                >
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                </div>
                <div className="p-6 ">
                  <h3 className="text-xl font-bold mb-2">{project.subtitle}</h3>
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-gray-300 mb-4">
                      {desc}
                    </p>
                  ))}
                    {project.techStack && (
    <div className="flex flex-wrap gap-2 mb-4">
      {project.techStack.map((tech, i) => (
        <span
          key={i}
          className="inline-flex items-center px-2 py-1 bg-gray-700 text-xs text-blue-300 rounded-full"
        >
          {tech.icon && (
            <span className="mr-1">
              {/* Render icon as a React component */}
              {typeof tech.icon === "function" ? tech.icon() : tech.icon}
            </span>
          )}
          {tech.name || tech}
        </span>
      ))}
    </div>
  )}
                  <div className="flex space-x-4 mt-auto">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 rounded-full text-sm font-medium hover:bg-blue-600 transition-colors"
                    >
                      View Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-blue-400 rounded-full text-sm font-medium hover:bg-blue-400/10 transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
