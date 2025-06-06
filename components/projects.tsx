"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

const projects = [
  {
  title: "ExpenseWise",
  description: "A modern expense tracker to manage your income and expenses with ease.",
  image: "/ExpenseWise.png",
  tags: ["Next.js", " Supabase", "Tailwind CSS"],
  github: "https://github.com/ujjwalbokde/expensewise",
  demo: "https://expensewise-money.vercel.app",
}
,
  {
    title: "DevConnect",
    description: "Social media platform for developers to connect and share knowledge",
    image: "/devconnect.png",
    tags: ["Next.js", "Express.js", "Supabase"],
    github: "https://github.com/ujjwalbokde/devconnect",
    demo: "https://devconnect-dev.vercel.app",
  },
  {
    title: "Ujjwal Graphics",
    description: "Business website with portfolio showcase and service listings",
    image: "/ug_web.jpg",
    tags: ["React", "Tailwind CSS", "Next.js"],
    github: "https://github.com/ujjwalbokde/Ujjwal-Graphics_Website",
    demo: "https://ujjwal-graphics.vercel.app",
  },
  {
    title: "Library Management System",
    description: "Book management CRUD application with user authentication",
    image: "/library.png",
    tags: ["MERN Stack", "Express.js", "MongoDB"],
    github: "https://github.com/ujjwalbokde/Library-Management-Project-using-react",
    demo: "https://github.com/ujjwalbokde/Library-Management-Project-using-react",
  },
  {
    title: "Wandarlust",
    description: "Travel destination discovery platform with interactive maps",
    image: "/wandarlust.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/ujjwalbokde/Mini-Wandarlust",
    demo: "https://github.com/ujjwalbokde/Mini-Wandarlust",
  },
  {
    title: "Weather Detector",
    description: "Real-time weather forecast application with location search",
    image: "/weather.jpg",
    tags: ["JavaScript", "Weather API", "CSS3"],
    github: "https://github.com/ujjwalbokde/Weather-API-using-reactjs",
    demo: "https://ujjwal-weather-detector.vercel.app/",
  },
]

export default function Projects() {
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
    <section id="projects" ref={ref} className="py-16 md:py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tighter">
              My Projects
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full mx-auto"
            />
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </motion.p>
          </div>

          <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-border group">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="outline" size="sm" className="gap-1">
                      <Link href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="gap-1 bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600"
                    >
                      <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
