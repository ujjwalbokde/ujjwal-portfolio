"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, BookOpen, Award } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 bg-muted/20">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={itemVariants} className="relative">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/ub.jpg"
                alt="Ujjwal Bokde"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-indigo-500/20 mix-blend-multiply" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-2xl -z-10" />
          </motion.div>

          <div className="space-y-8">
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">About Me</h2>
              <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full" />
            </motion.div>

            <motion.p variants={itemVariants} className="text-lg text-muted-foreground">
              I'm a passionate Full Stack Developer and a Final Year B.Tech CSE Student at YCCE. With a solid foundation in web development and a keen eye for design, I build responsive and user-friendly applications that solve real-world problems. I'm proficient in Java, Data Structures & Algorithms (DSA), Spring Boot, Next.js, and the MERN stack, enabling me to develop scalable full-stack solutions.
            </motion.p>

            <div className="space-y-4">
              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Academic Background</h3>
                  <p className="text-muted-foreground">
                    Pursuing B.Tech in Computer Science Engineering at YCCE, with a focus on web technologies and
                    software development.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Development Passion</h3>
                  <p className="text-muted-foreground">
                    Dedicated to crafting clean, efficient code and building intuitive user experiences. Always
                    exploring new technologies and frameworks.
                  </p>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Leadership Role</h3>
                  <p className="text-muted-foreground">
                    Currently serving as the Secretary of Engineering India YCCE Club, where I organize tech events and
                    mentor fellow students.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
