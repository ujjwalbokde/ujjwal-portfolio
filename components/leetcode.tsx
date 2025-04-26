"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { CircleCheck, CircleX, AlertCircle, Trophy, Code, BarChart } from "lucide-react"

interface LeetCodeStats {
  status: string
  totalSolved: number
  easySolved: number
  mediumSolved: number
  hardSolved: number
  ranking: number
  contributionPoints?: number
  reputation?: number
}

export default function LeetCodeStats() {
  const [stats, setStats] = useState<LeetCodeStats | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        setLoading(true)
        const response = await fetch("https://leetcode-stats-api.herokuapp.com/ujjwal370")

        if (!response.ok) {
          throw new Error(`Failed to fetch LeetCode stats: ${response.status}`)
        }

        const data = await response.json()
        setStats(data)
      } catch (err) {
        console.error("Error fetching LeetCode stats:", err)
        setError(err instanceof Error ? err.message : "Failed to fetch LeetCode stats")
      } finally {
        setLoading(false)
      }
    }

    fetchLeetCodeStats()
  }, [])

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

  const statCards = [
    {
      title: "Total Solved",
      value: stats?.totalSolved || 0,
      icon: Code,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Easy Problems",
      value: stats?.easySolved || 0,
      icon: CircleCheck,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      title: "Medium Problems",
      value: stats?.mediumSolved || 0,
      icon: AlertCircle,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
    },
    {
      title: "Hard Problems",
      value: stats?.hardSolved || 0,
      icon: CircleX,
      color: "text-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      title: "Global Ranking",
      value: stats?.ranking ? `#${stats.ranking.toLocaleString()}` : "#0",
      icon: Trophy,
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
    },
    {
      title: "Contribution",
      value: stats?.contributionPoints || 0,
      icon: BarChart,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
  ]

  return (
    <section id="leetcode" ref={ref} className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold tracking-tighter">
              LeetCode Stats
            </motion.h2>
            <motion.div
              variants={itemVariants}
              className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full mx-auto"
            />
            <motion.p variants={itemVariants} className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My problem-solving journey on LeetCode
            </motion.p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">Failed to load LeetCode stats. Please try again later.</p>
            </div>
          ) : (
            <motion.div variants={containerVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {statCards.map((card, index) => (
                <motion.div key={card.title} variants={itemVariants} custom={index}>
                  <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg border-border hover:border-primary/50">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-12 h-12 rounded-full ${card.bgColor} flex items-center justify-center ${card.color}`}
                        >
                          <card.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{card.title}</p>
                          <p className={`text-2xl font-bold ${card.color}`}>{card.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}

          <motion.div variants={itemVariants} className="flex justify-center">
            <a
              href="https://leetcode.com/ujjwal370/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              <Code className="w-4 h-4" />
              View LeetCode Profile
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
