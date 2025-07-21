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
        <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 text-gray-900">
          Some of My{" "}
          <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
            Best Work
          </span>
        </h2>
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

        <div className="grid grid-cols-4 gap-4">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="flex flex-col items-center justify-center bg-slate-50 border border-gray-200 rounded-lg shadow-sm p-4 h-28 w-full transition hover:shadow-md"
            >
              <div className="mb-1">
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
                        "h-8 w-8 mb-1",
                      ]
                        .filter(Boolean)
                        .join(" "),
                    }
                  )
                ) : (
                  <Box className="h-8 w-8 text-gray-400 mb-1" />
                )}
              </div>
              <span className="text-xs sm:text-sm font-semibold text-gray-800 text-center leading-tight break-words">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
