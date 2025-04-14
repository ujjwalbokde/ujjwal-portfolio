import Link from "next/link"
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted/50 py-12 border-t">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link
              href="#home"
              className="text-xl font-bold bg-gradient-to-r from-teal-500 via-violet-500 to-indigo-500 bg-clip-text text-transparent"
            >
              Ujjwal Bokde
            </Link>
            <p className="text-muted-foreground">
              MERN Stack Developer and B.Tech CSE Student passionate about creating innovative web solutions.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <Link
                href="https://github.com/ujjwalbokde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/ujjwalbokde"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:ujjwalbokde370@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© 2025 Ujjwal Bokde. All Rights Reserved.</p>
          <Link
            href="#home"
            className="mt-4 md:mt-0 flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to top <ArrowUp className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
