"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container py-8">
        <div className="flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:py-0">
          <div className="flex gap-4">
            <Link
              href="https://github.com/Sachintha1994"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-background p-2 hover:bg-accent"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/thilina-weerasinghe/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-background p-2 hover:bg-accent"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:thilina.sachintha17@gmail.com"
              className="rounded-2xl bg-background p-2 hover:bg-accent"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="flex justify-center mt-2">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Thilina Weerasinghe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 