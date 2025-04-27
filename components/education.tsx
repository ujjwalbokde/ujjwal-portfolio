"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { School, GraduationCap, BookOpen } from "lucide-react"
import { useEffect, useState } from "react"

const educationTimeline = [
  {
    year: "2020",
    title: "SSC",
    institution: "Sangita High School",
    description: "Completed Secondary School Certificate with distinction",
    icon: School,
  },
  {
    year: "2022",
    title: "HSC",
    institution: "New English Junior College",
    description: "Completed Higher Secondary Certificate with focus on Science",
    icon: BookOpen,
  },
  {
    year: "2022-2026",
    title: "B.Tech in Computer Science Engineering",
    institution: "Yeshwantrao Chavan College of Engineering",
    description: "Currently pursuing Bachelor's degree with specialization in Computer Science",
    icon: GraduationCap,
    current: true,
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="education" ref={ref} className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tighter">
              Education
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full mx-auto"
            />
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey and qualifications
            </motion.p>
          </div>

          {isMobile ? (
            // Mobile timeline (vertical stacked)
            <div className="relative max-w-md mx-auto">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-teal-500 via-violet-500 to-indigo-500"></div>

              {/* Timeline items */}
              <div className="space-y-8">
                {educationTimeline.map((item, index) => (
                  <motion.div key={index} variants={itemVariants} className="relative pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-[0.3125rem] top-5 transform -translate-x-1/2 w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10">
                      {item.current && <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>}
                    </div>

                    {/* Content */}
                    <div
                      className={`p-4 bg-card rounded-xl shadow-md border border-border ${
                        item.current ? "ring-2 ring-primary/20" : ""
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          {<item.icon className="w-5 h-5" />}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold">{item.title}</h3>
                          <p className="text-xs text-muted-foreground">{item.year}</p>
                        </div>
                      </div>
                      <p className="font-medium">{item.institution}</p>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      {item.current && (
                        <div className="mt-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          Currently Pursuing
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            // Desktop timeline (alternating)
            <div className="relative max-w-3xl mx-auto">
              {/* Timeline line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-teal-500 via-violet-500 to-indigo-500"></div>

              {/* Timeline items */}
              <div className="space-y-12">
                {educationTimeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`relative flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary flex items-center justify-center z-10">
                      {item.current && <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>}
                    </div>

                    {/* Content */}
                    <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12"}`}>
                      <div
                        className={`p-6 bg-card rounded-2xl shadow-md border border-border ${
                          item.current ? "ring-2 ring-primary/20" : ""
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                            {<item.icon className="w-5 h-5" />}
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">{item.year}</p>
                          </div>
                        </div>
                        <p className="font-medium">{item.institution}</p>
                        <p className="text-muted-foreground mt-1">{item.description}</p>
                        {item.current && (
                          <div className="mt-3 inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            Currently Pursuing
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Empty space for the other side */}
                    <div className="w-1/2"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
