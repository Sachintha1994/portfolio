"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Rocket, ExternalLink, Github, Link as LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const aboutSections = [
  {
    title: "Hello World!",
    icon: <Heart className="h-5 w-5 text-primary" />,
    content: "I'm Thilina Weerasinghe, a passionate Software Engineer with hands-on experience building scalable backend services and full-stack applications. I love crafting clean architectures, solving complex distributed systems problems, and delivering products that make a real difference.",
  },
  {
    title: "What I Do",
    icon: <Rocket className="h-5 w-5 text-primary" />,
    content: "I specialize in Java and Spring Boot for robust backend development, and extend my skills to the frontend with React and Angular. I'm experienced deploying cloud-native applications on AWS using Docker and Kubernetes, and I enjoy building everything from mobile payment platforms to real estate portals.",
  },
];

const portfolioProjects: {
  title: string;
  description: string;
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  tags: string[];
}[] = [
  {
    title: "DhiraaguPay",
    description: "Mobile payment platform for Dhiraagu — Maldives' leading telecom operator. Built with Java and Spring Boot microservices, deployed on AWS via Docker and Kubernetes with PostgreSQL for data management.",
    image: "/dhiraagupay.png",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
  },
  {
    title: "One App",
    description: "A comprehensive one-stop mobile banking and financial services application. Developed scalable backend APIs and microservices with Spring Boot, supporting thousands of concurrent users.",
    image: "/oneapp.png",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Microservices", "AWS", "Docker"],
  },
  {
    title: "LoopNet",
    description: "A feature-rich real estate listing and search platform built with Spring Boot on the backend and Angular on the frontend, backed by MySQL for property data management.",
    image: "/loopnet.png",
    liveUrl: "https://www.loopnet.com",
    tags: ["Spring Boot", "Angular", "MySQL", "REST API"],
  },
  {
    title: "Blog Post Controller System",
    description: "A full-featured content management system for creating, editing, and publishing blog posts. Built with C# and ASP.NET Core MVC backed by SQL Server, with an Angular frontend.",
    image: "/blogpost.png",
    tags: ["C#", "ASP.NET Core", "SQL Server", "Angular"],
  },
  {
    title: "Point of Sale System",
    description: "A robust POS application for retail businesses with inventory management, sales tracking, receipts, and daily reporting. Built using C#, ASP.NET, and SQL Server with an Angular-powered UI.",
    image: "/pos.png",
    tags: ["C#", "ASP.NET", "SQL Server", "Angular"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function AboutPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          About Me
        </h1>
        <p className="mt-4 text-muted-foreground max-w-[700px]">
          Software Engineer passionate about building impactful, scalable systems
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2"
      >
        {aboutSections.map((section) => (
          <motion.div key={section.title} variants={item}>
            <Card className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {section.icon}
                  {section.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{section.content}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Portfolio Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mt-20"
      >
        <h2 className="text-3xl font-bold tracking-tighter text-center mb-8">
          Portfolio
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              className="group relative"
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all">
                <div
                  className="relative block aspect-video group cursor-pointer overflow-hidden"
                >
                  <div className="relative w-full h-full transform transition-transform duration-300 group-hover:scale-105">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-300 group-hover:blur-sm"
                    />
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20"
                      >
                        <LinkIcon className="w-8 h-8 text-white" />
                      </Link>
                    )}
                    {!project.liveUrl && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/20" />
                    )}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-muted font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github className="h-4 w-4" />
                        Source Code
                      </Link>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}