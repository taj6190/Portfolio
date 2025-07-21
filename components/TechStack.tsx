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

// List of technologies
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

// Map tech name to corresponding icon
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
    <section id="techstack" className="bg-white py-20 px-6">
      <div className="text-center mb-16">
        <Badge className="bg-blue-100 text-blue-700">Tech Stack</Badge>
        <h2 className="text-4xl font-extrabold mt-4 text-gray-900">
          Some of My{" "}
          <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
            Best Work
          </span>
        </h2>
      </div>
      <div className="max-w-[1200px] mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
          My{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">
            Tech Stack
          </span>
        </h2>
        <p className="mt-2 text-lg text-slate-600 max-w-2xl mx-auto mb-12">
          Tools, frameworks, and technologies I use regularly to build and
          deploy full-stack solutions.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="flex flex-col items-center justify-center bg-slate-50 border border-gray-200 rounded-xl shadow-sm p-6 h-40 w-full transition hover:shadow-md"
            >
              <div className="mb-3">
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
                        "h-12 w-12 mb-2",
                      ]
                        .filter(Boolean)
                        .join(" "),
                    }
                  )
                ) : (
                  <Box className="h-12 w-12 text-gray-400 mb-2" />
                )}
              </div>
              <span className="text-lg font-semibold text-gray-800 text-center">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
