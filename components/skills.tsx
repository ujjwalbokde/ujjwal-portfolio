"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "Nest.js", icon: "next" },
      { name: "JavaScript", icon: "javascript" },
      { name: "React.js", icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Bootstrap", icon: "bootstrap" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: "nodejs" },
      { name: "Express.js", icon: "express" },
      { name: "FastAPI", icon: "fastapi" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: "mongodb" },
      { name: "MySQL", icon: "mysql" },
    ],
  },
  {
    category: "Programming Languages",
    items: [
      { name: "Java", icon: "java" },
      { name: "Python", icon: "python" },
      { name: "C", icon: "c" },
    ],
  },
]

// Skill icons mapping
const skillIcons: Record<string, string> = {
  next: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  css3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  tailwind: "/tailwind.png",
  bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "/express.png",
  fastapi: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  mysql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  c: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" ref={ref} className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tighter">
              My Skills
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full mx-auto"
            />
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A collection of technologies and tools I work with
            </motion.p>
          </div>

          <div className="space-y-10">
            {skills.map((category, index) => (
              <motion.div key={category.category} variants={itemVariants} className="space-y-4">
                <h3 className="text-2xl font-semibold">{category.category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                  {category.items.map((skill) => (
                    <TooltipProvider key={skill.name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <motion.div
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center justify-center p-6 bg-card rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-border"
                          >
                            <div className="w-16 h-16 flex items-center justify-center mb-3">
                              <img
                                src={skillIcons[skill.icon] || `/placeholder.svg?height=64&width=64&text=${skill.name}`}
                                alt={skill.name}
                                className="w-12 h-12 object-contain"
                              />
                            </div>
                            <span className="font-medium">{skill.name}</span>
                          </motion.div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>
                            {skill.name} - {getSkillDescription(skill.name)}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function getSkillDescription(skillName: string): string {
  const descriptions: Record<string, string> = {
    HTML5: "Markup language for web pages",
    CSS3: "Styling web pages",
    JavaScript: "Programming language for web",
    "React.js": "Frontend library for UI components",
    "Tailwind CSS": "Utility-first CSS framework",
    Bootstrap: "CSS framework for responsive design",
    "Node.js": "JavaScript runtime for server-side",
    "Express.js": "Web framework for Node.js",
    FastAPI: "Modern, fast web framework for Python",
    MongoDB: "NoSQL database",
    MySQL: "Relational database management system",
    Java: "Object-oriented programming language",
    Python: "High-level programming language",
    C: "General-purpose programming language",
  }

  return descriptions[skillName] || "Technology skill"
}
