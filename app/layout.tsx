import type React from "react"
import "@/app/globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { GeistSans } from "geist/font/sans"

export const metadata = {
  title: "Ujjwal Bokde | MERN Stack Developer",
  description: "Personal portfolio of Ujjwal Bokde, a MERN Stack Developer and B.Tech CSE Student",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} antialiased bg-background text-foreground`}>
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}


import './globals.css'