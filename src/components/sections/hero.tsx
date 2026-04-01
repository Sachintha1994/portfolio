"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  return (
    <div className="container flex flex-col items-center justify-center gap-4 py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center space-y-4 text-center mb-4"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent p-4">
          Thilina Weerasinghe
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-[700px] text-gray-500 dark:text-gray-400 md:text-xl"
        >
          Software Engineer specializing in Java, Spring Boot, and cloud-native applications.
          Building scalable backend systems and modern full-stack solutions.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-4 justify-center"
      >
        <Link href="/projects">
          <Button size="lg" className="group">
            View Projects
            <motion.span
              className="ml-2 inline-block"
              initial={{ x: 0 }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="outline" size="lg">
            Get in Touch
          </Button>
        </Link>
        <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
          <Button variant="outline" size="lg" className="gap-2">
            <FileText className="h-4 w-4" />
            View CV
          </Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex gap-4 mt-8"
      >
        <Link href="https://github.com/Sachintha1994" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/thilina-weerasinghe/" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
        <Link href="mailto:thilina.sachintha17@gmail.com">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Mail className="h-5 w-5" />
            <span className="sr-only">Email</span>
          </Button>
        </Link>
        <a href="/cv.pdf" download="Thilina_Weerasinghe_CV.pdf">
          <Button variant="ghost" size="icon" className="rounded-full">
            <FileText className="h-5 w-5" />
            <span className="sr-only">CV</span>
          </Button>
        </a>
      </motion.div>
    </div>
  );
}
