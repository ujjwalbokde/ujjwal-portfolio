"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const projects = [
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
    github: "https://github.com/ujjwalbokde/ujjwal-graphics",
    demo: "https://ujjwal-graphics.vercel.app",
  },
  {
    title: "Library Management System",
    description: "Book management CRUD application with user authentication",
    image: "/library.png",
    tags: ["MERN Stack", "Express.js", "MongoDB"],
    github: "https://github.com/ujjwalbokde/library-management",
    demo: "https://library-management-demo.vercel.app",
  },
  {
    title: "Wandarlust",
    description: "Travel destination discovery platform with interactive maps",
    image: "/wandarlust.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/ujjwalbokde/wandarlust",
    demo: "https://wandarlust-travel.vercel.app",
  },
  {
    title: "Weather Detector",
    description: "Real-time weather forecast application with location search",
    image: "/weather.jpg",
    tags: ["JavaScript", "Weather API", "CSS3"],
    github: "https://github.com/ujjwalbokde/weather-detector",
    demo: "https://weather-detector-app.vercel.app",
  },
]

export default function ProjectsCarousel() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)
  const [isAnimating, setIsAnimating] = useState(false)

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      // Swipe left
      handleNext()
    }

    if (touchStart - touchEnd < -75) {
      // Swipe right
      handlePrev()
    }
  }

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 5000)

    return () => clearInterval(interval)
  }, [currentIndex])

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

  const currentProject = projects[currentIndex]

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

          <div className="relative max-w-xl mx-auto">
            <div
              ref={carouselRef}
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-border group">
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={currentProject.image || "/placeholder.svg"}
                      alt={currentProject.title}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{currentProject.title}</CardTitle>
                    <CardDescription>{currentProject.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {currentProject.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button asChild variant="outline" size="sm" className="gap-1">
                      <Link href={currentProject.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </Link>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="gap-1 bg-gradient-to-r from-teal-500 to-indigo-500 hover:from-teal-600 hover:to-indigo-600"
                    >
                      <Link href={currentProject.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>

            <div className="flex justify-center mt-6 gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={handlePrev}
                aria-label="Previous project"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-2">
                {projects.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to project ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full"
                onClick={handleNext}
                aria-label="Next project"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
