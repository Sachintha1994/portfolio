"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experience = [
  {
    company: "PayMedia",
    location: "Colombo, Sri Lanka",
    position: "Software Engineer",
    period: "Aug 2024 - Present",
    description: [
      {
        id: "paymedia-1",
        text: "Designing and developing scalable backend services using Java and Spring Boot for a leading fintech platform.",
      },
      {
        id: "paymedia-2",
        text: "Building and maintaining microservices deployed on AWS using Docker and Kubernetes for high availability.",
      },
      {
        id: "paymedia-3",
        text: "Collaborating across teams to deliver DhiraaguPay and One App — mobile payment and banking platforms serving thousands of users.",
      },
      {
        id: "paymedia-4",
        text: "Working with PostgreSQL for data management and implementing RESTful APIs for mobile and web clients.",
      },
    ],
  },
  {
    company: "Xeleris Inc.",
    location: "Remote",
    position: "Associate Software Engineer",
    period: "Apr 2023 - Aug 2024",
    description: [
      {
        id: "xeleris-1",
        text: "Developed full-stack features for the LoopNet real estate platform using Spring Boot (backend) and Angular (frontend).",
      },
      {
        id: "xeleris-2",
        text: "Managed MySQL databases, wrote complex queries, and optimized application performance.",
      },
      {
        id: "xeleris-3",
        text: "Participated in agile ceremonies and contributed to sprint planning, code reviews, and technical documentation.",
      },
    ],
  },
  {
    company: "Institute of Java Software Engineering",
    location: "Sri Lanka",
    position: "Intern Full Stack Developer",
    period: "Jan 2023 - Aug 2023",
    description: [
      {
        id: "ijse-1",
        text: "Developed web applications using C# and ASP.NET Core with Angular for the frontend.",
      },
      {
        id: "ijse-2",
        text: "Built a Blog Post Controller System and a Point of Sale System, gaining hands-on experience with SQL Server and MVC architecture.",
      },
      {
        id: "ijse-3",
        text: "Learned industry best practices in software development, version control with GitHub, and collaborative development workflows.",
      },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function ExperiencePage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Experience</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          My professional journey and work experience.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto"
      >
        {experience.map((exp, index) => (
          <motion.div
            key={exp.company + exp.position}
            variants={item}
            className="relative pl-8 pb-8 last:pb-0"
          >
            {index !== experience.length - 1 && (
              <div className="absolute left-[11px] top-8 h-full w-[2px] bg-gray-200 dark:bg-gray-800" />
            )}
            <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-primary bg-background" />
            
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  {exp.company}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="space-y-2">
                  <p className="font-medium">{exp.position}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((item) => (
                      <li key={item.id} className="text-sm text-gray-500 dark:text-gray-400 flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}