// components/CertificationsSection.tsx
"use client"
import { FaExternalLinkAlt, FaCertificate, FaCalendarAlt, FaIdBadge } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Cert = {
  title: string;
  org: string;
  date: string;
  credentialId?: string;
  expires?: string;
  verifyUrl?: string;
  badgeUrl?: string;
  description?: string;
  skills?: string[];
};

const CERTS: Cert[] = [
  { 
    title: "Introduction to Cloud Computing", 
    org: "Coursera", 
    date: "Sep 2024", 
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/MPOYHHW7KN35", 
    badgeUrl: "/badges/aws-ccp.svg",
    description: "Foundational understanding of AWS Cloud concepts, services, and terminology.",
    skills: ["Cloud Computing", "AWS Services", "Security", "Pricing"]
  },
  { 
    title: "Java (Intermediate)", 
    org: "HackerRank", 
    date: "Dec 2023", 
    credentialId: "HR-1234-XYZ", 
    verifyUrl: "https://...",
    description: "Demonstrated proficiency in Java programming concepts and problem-solving.",
    skills: ["Java", "OOP", "Data Structures", "Algorithms"]
  },
  { 
    title: "Google Data Analytics Certificate", 
    org: "Coursera", 
    date: "Aug 2024", 
    verifyUrl: "https://...", 
    badgeUrl: "/badges/coursera-gda.svg",
    description: "Comprehensive data analytics skills including data cleaning, analysis, and visualization.",
    skills: ["Data Analysis", "SQL", "Tableau", "R Programming"]
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  },
  hover: {
    y: -8,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 25
    }
  }
};

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

  return (
    <section id="certifications" className="py-16">
      <div className="container mx-auto px-4">
        {/* Centered heading */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
            Certifications
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full mx-auto" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verified skills and credentials
          </p>
        </div>

        {/* Animated certificate grid */}
        <motion.ul 
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {CERTS.map((cert, index) => (
            <motion.li
              key={cert.title + cert.date}
              variants={cardVariants}
              whileHover="hover"
              className="group cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative h-full">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Main card */}
                <article className="relative h-full bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  {/* Header with badge */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative">
                      {cert.badgeUrl ? (
                        <motion.img
                          src={cert.badgeUrl}
                          alt={`${cert.org} badge`}
                          className="h-14 w-14 rounded-xl object-contain ring-2 ring-border/50 bg-background p-1"
                          whileHover={{ rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        />
                      ) : (
                        <motion.div 
                          className="h-14 w-14 rounded-xl bg-gradient-to-br from-teal-500 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg"
                          whileHover={{ rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <FaCertificate />
                        </motion.div>
                      )}
                      {/* Verification badge */}
                      <div className="absolute -top-1 -right-1 h-6 w-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                        <motion.svg 
                          className="h-3 w-3 text-white" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 500 }}
                        >
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </motion.svg>
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2 leading-tight">
                        {cert.title}
                      </h3>
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <FaCertificate className="h-3 w-3" />
                          <span className="font-medium">{cert.org}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaCalendarAlt className="h-3 w-3" />
                          <span>{cert.date}</span>
                          {cert.expires && <span>• Expires {cert.expires}</span>}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Skills tags */}
                  {cert.skills && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {cert.skills.slice(0, 3).map((skill) => (
                        <span 
                          key={skill}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full border border-border">
                          +{cert.skills.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50">
                    {cert.credentialId && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <FaIdBadge className="h-3 w-3" />
                        <span className="font-mono">{cert.credentialId}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-3 ml-auto">
                      <span className="text-sm font-medium text-primary group-hover:text-primary/80">
                        View Details
                      </span>
                      <motion.div
                        className="h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaExternalLinkAlt className="h-3 w-3 text-primary" />
                      </motion.div>
                    </div>
                  </div>
                </article>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        {/* Modal for expanded view */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Backdrop */}
              <motion.div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setSelectedCert(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
              
              {/* Modal content */}
              <motion.div
                className="relative bg-card border border-border rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Close button */}
                <button
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-4 right-4 h-8 w-8 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Modal header */}
                <div className="flex items-start gap-6 mb-6">
                  {selectedCert.badgeUrl ? (
                    <img
                      src={selectedCert.badgeUrl}
                      alt={`${selectedCert.org} badge`}
                      className="h-20 w-20 rounded-2xl object-contain ring-2 ring-border bg-background p-2"
                    />
                  ) : (
                    <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-teal-500 to-indigo-500 flex items-center justify-center text-white shadow-lg">
                      <FaCertificate className="h-8 w-8" />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
                    <p className="text-muted-foreground mb-4">{selectedCert.org} • {selectedCert.date}</p>
                    {selectedCert.description && (
                      <p className="text-foreground/80 leading-relaxed">{selectedCert.description}</p>
                    )}
                  </div>
                </div>

                {/* Skills */}
                {selectedCert.skills && (
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Skills Covered</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((skill) => (
                        <span 
                          key={skill}
                          className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-4 pt-6 border-t border-border">
                  {selectedCert.verifyUrl && (
                    <a
                      href={selectedCert.verifyUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors"
                    >
                      <FaExternalLinkAlt className="h-4 w-4" />
                      Verify Credential
                    </a>
                  )}
                  {selectedCert.credentialId && (
                    <div className="flex items-center gap-2 px-4 py-3 bg-muted rounded-xl">
                      <FaIdBadge className="h-4 w-4 text-muted-foreground" />
                      <span className="font-mono text-sm">{selectedCert.credentialId}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
