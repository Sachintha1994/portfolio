"use client";

import { motion } from "framer-motion";
import { Users, Star, Trophy, Calendar, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    category: "Certifications",
    icon: <Award className="h-5 w-5" />,
    items: [
      {
        title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
        description: "Earned the Microsoft Azure Fundamentals certification, demonstrating understanding of cloud concepts, Azure services, security, privacy, compliance, and trust.",
        year: "2024"
      },
      {
        title: "AWS Certified Cloud Practitioner",
        description: "Earned the AWS Certified Cloud Practitioner certification, validating overall understanding of the AWS Cloud, services, and core concepts.",
        year: "2024"
      },
      {
        title: "Oracle Certified Associate: Java SE 8 Programmer",
        description: "Earned the Oracle Java SE 8 OCA certification, demonstrating proficiency in Java fundamentals, object-oriented concepts, and Java programming.",
        year: "2023"
      },
    ],
  },
  {
    category: "Professional Achievements",
    icon: <Trophy className="h-5 w-5" />,
    items: [
      {
        title: "Software Engineer at PayMedia",
        description: "Joined as a full-time Software Engineer at PayMedia, contributing to major fintech platforms including DhiraaguPay and One App, serving thousands of users across the Maldives.",
        year: "2024"
      },
      {
        title: "Associate Software Engineer at Xeleris Inc.",
        description: "Promoted from intern to Associate Software Engineer at Xeleris Inc., working on the LoopNet real estate platform with Spring Boot and Angular.",
        year: "2023"
      },
    ],
  },
  {
    category: "Academic Achievements",
    icon: <Star className="h-5 w-5" />,
    items: [
      {
        title: "Bachelor of Science in Engineering",
        description: "Graduated with a B.Sc. in Engineering from the University of Peradeniya, Sri Lanka — one of the most prestigious engineering programs in the country.",
        year: "2021"
      },
    ],
  },
  {
    category: "Community",
    icon: <Users className="h-5 w-5" />,
    items: [
      {
        title: "Open Source Contributor",
        description: "Actively contributing to open-source projects on GitHub, including personal tools for working time tracking, user management backends, and DevOps automation.",
        year: "2023-Present"
      },
    ],
  },
];

// Flatten all achievements into a single timeline
const timelineItems = achievements.flatMap(category =>
  category.items.map(item => ({
    ...item,
    category: category.category,
    icon: category.icon
  }))
);

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

export default function AchievementsPage() {
  return (
    <div className="container py-12 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center mb-8 text-center"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
          Achievements
        </h1>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-[700px]">
          My certifications, professional milestones, and notable accomplishments
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-1"
      >
        {timelineItems.map((achievement) => (
          <motion.div
            key={achievement.title}
            variants={item}
            className="relative pl-8 py-4 border-l border-gray-200 dark:border-gray-800"
          >
            <div className="absolute left-0 top-5 -translate-x-1/2 p-1 bg-white dark:bg-gray-950 rounded-full border border-gray-200 dark:border-gray-800">
              {achievement.icon}
            </div>

            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-medium text-base">{achievement.title}</h3>
              <Badge variant="outline" className="ml-auto flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{achievement.year}</span>
              </Badge>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {achievement.description}
            </p>

            <Badge variant="secondary" className="mt-2">
              {achievement.category}
            </Badge>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}