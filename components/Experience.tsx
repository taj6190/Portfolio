"use client";

import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin, TrendingUp } from "lucide-react";

const experiences = [
  {
    company: "The Wunder Kind Company",
    position: "Web Developer | IT Support",
    period: "June 2023 – Present",
    location: "Remote",
    description:
      "Leading web development and IT operations for international clients.",
    achievements: [
      "Developed responsive websites using React, HTML, CSS, and JavaScript",
      "Provided IT support, resolving issues promptly across systems",
      "Collaborated with backend teams for seamless integration",
      "Increased website traffic by 20% through optimized UX",
      "Successfully managed deadlines for global client projects",
    ],
    technologies: ["React", "JavaScript", "HTML", "CSS", "IT Support"],
    current: true,
  },
  {
    company: "White Services Technology",
    position: "Front-End Developer (Intern)",
    period: "August 2022 – January 2023",
    location: "Dhaka, Bangladesh",
    description:
      "Hands-on experience with modern web development in a professional setting.",
    achievements: [
      "Supported frontend tasks using JavaScript and CSS",
      "Tested and debugged applications across browsers",
      "Worked in Agile teams with sprint-based deliverables",
      "Contributed to live projects across multiple domains",
    ],
    technologies: ["JavaScript", "HTML", "CSS", "Agile", "Testing"],
    current: false,
  },
];

export default function ExperienceServer() {
  return (
    <section id="experience" className="bg-gray-50 py-12 sm:py-16">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-12 text-center max-w-2xl mx-auto px-2">
          <Badge className="mb-3 bg-sky-100 text-sky-700 border border-sky-300 text-xs sm:text-sm px-3 py-1">
            Professional Experience
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight text-gray-900">
            My{" "}
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h2>
          <p className="mt-2 sm:mt-3 text-gray-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Building innovative solutions and driving success through technology
            and collaboration.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-sky-300 pl-6 sm:pl-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative mb-8 last:mb-0 sm:mb-12"
              style={{ minWidth: 0 }}
            >
              {/* Dot */}
              <div
                className="absolute left-[-12px] top-3 w-6 h-6 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 border-2 border-white shadow flex items-center justify-center"
                aria-hidden="true"
              >
                <Briefcase className="w-4 h-4 text-white" />
              </div>

              {/* Content Card */}
              <article className="bg-white p-4 sm:p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 truncate max-w-full">
                    {exp.position}{" "}
                    {exp.current && (
                      <Badge className="ml-2 bg-sky-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold select-none whitespace-nowrap">
                        Current
                      </Badge>
                    )}
                  </h3>
                  <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-4 mt-1 sm:mt-0 text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                    <span className="flex items-center gap-1 mr-3">
                      <Calendar className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-500 flex-shrink-0" />
                      {exp.location}
                    </span>
                  </div>
                </header>

                {/* Description */}
                <p className="mt-2 sm:mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                  {exp.description ===
                  "Leading web development and IT operations for international clients."
                    ? `Leading web development and IT operations for international clients, managing multiple projects simultaneously with a focus on scalability and security. Coordinated cross-functional teams to deliver high-quality digital solutions that meet client expectations and business goals.`
                    : exp.description}
                </p>

                {/* Achievements */}
                <details className="mt-3 text-gray-700 text-sm sm:text-base">
                  <summary className="cursor-pointer font-semibold flex items-center gap-1 select-none">
                    <TrendingUp className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    Key Achievements
                  </summary>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </details>

                {/* Technologies */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-sky-100 text-sky-800 border border-sky-300 px-2 py-1 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
