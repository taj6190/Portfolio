"use client";

import { Badge } from "@/components/ui/badge";
import { Box, Database, Server, Settings } from "lucide-react";
import React from "react";
import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaPython,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { SiDjango, SiJavascript, SiMysql } from "react-icons/si";

const techStack = [
  "React",
  "JavaScript",
  "Python",
  "Java",
  "HTML",
  "CSS",
  "Django",
  "WordPress",
  "SQL",
  "Git",
  "Responsive Design",
  "API Development",
  "Database Design",
  "Project Management",
];

const techIconMap: Record<string, React.ReactNode> = {
  React: <FaReact className="text-sky-500" />,
  JavaScript: <SiJavascript className="text-yellow-400" />,
  Python: <FaPython className="text-blue-700" />,
  Java: <FaJava className="text-red-600" />,
  HTML: <FaHtml5 className="text-orange-600" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  Django: <SiDjango className="text-green-700" />,
  WordPress: <FaWordpress className="text-blue-600" />,
  SQL: <SiMysql className="text-indigo-600" />,
  Git: <FaGitAlt className="text-orange-500" />,
  "Responsive Design": <Box className="text-purple-600" />,
  "API Development": <Server className="text-teal-600" />,
  "Database Design": <Database className="text-cyan-600" />,
  "Project Management": <Settings className="text-amber-600" />,
};

export default function TechStack() {
  return (
    <section id="techstack" className="bg-white py-14 px-4 sm:px-6">
      <div className="text-center mb-12">
        <Badge className="bg-blue-100 text-blue-700 text-xs sm:text-sm px-3 py-1">
          Tech Stack
        </Badge>
      </div>

      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
            Tech Stack
          </span>
        </h2>
        <p className="mt-1 mb-8 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Tools, frameworks, and technologies I use regularly to build and
          deploy full-stack solutions.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto px-4">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="aspect-square flex flex-col items-center justify-center bg-white border border-gray-200 rounded-md
        shadow-sm hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            >
              <div className="mb-3 text-sky-600">
                {techIconMap[tech] &&
                React.isValidElement(techIconMap[tech]) ? (
                  React.cloneElement(
                    techIconMap[tech] as React.ReactElement<{
                      className?: string;
                    }>,
                    {
                      className: [
                        (
                          techIconMap[tech] as React.ReactElement<{
                            className?: string;
                          }>
                        ).props.className,
                        "h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10",
                      ]
                        .filter(Boolean)
                        .join(" "),
                    }
                  )
                ) : (
                  <Box className="h-6 w-6 sm:h-8 sm:w-8 lg:h-10 lg:w-10 text-gray-400" />
                )}
              </div>
              <span className="text-center font-semibold text-gray-800 text-xs sm:text-sm lg:text-base">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
