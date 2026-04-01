"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const education = [
  {
    school: "University of Peradeniya",
    location: "Peradeniya, Sri Lanka",
    degree: "Bachelor of Science in Engineering",
    period: "2016 - 2021",
    gpa: "",
    description: "Studied engineering fundamentals with a focus on software and computer systems. Developed strong analytical and problem-solving skills through rigorous academic training.",
  },
  {
    school: "Rajapaksa Central College",
    location: "Sri Lanka",
    degree: "G.C.E. Advanced Level Examination",
    period: "2015",
    gpa: "",
    description: "Completed Advanced Level studies, building a strong foundation in mathematics and sciences.",
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

export default function EducationPage() {
  return (
    <div className="container py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-12 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Education</h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-[700px]">
          My academic journey and qualifications.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-3xl mx-auto"
      >
        {education.map((edu, index) => (
          <motion.div
            key={edu.school}
            variants={item}
            className="relative pl-8 pb-8 last:pb-0"
          >
            {index !== education.length - 1 && (
              <div className="absolute left-[11px] top-8 h-full w-[2px] bg-gray-200 dark:bg-gray-800" />
            )}
            <div className="absolute left-0 top-2 h-6 w-6 rounded-full border-2 border-primary bg-background" />
            
            <Card className="relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  {edu.school}
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="space-y-2">
                  <p className="font-medium">{edu.degree}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </span>
                  </div>
                  {edu.gpa && (
                    <p className="text-sm font-medium text-primary">{edu.gpa}</p>
                  )}
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {edu.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}