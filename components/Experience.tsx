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
    <section id="experience" className="bg-gray-50 py-16">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <Badge className="mb-3 bg-sky-100 text-sky-700 border border-sky-300">
            Professional Experience
          </Badge>
          <h2 className="text-4xl font-extrabold leading-tight text-gray-900">
            My{" "}
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Career Journey
            </span>
          </h2>
          <p className="mt-3 text-gray-600 text-base md:text-lg max-w-lg mx-auto">
            Building innovative solutions and driving success through technology
            and collaboration.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-sky-300">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative pl-8 mb-12 last:mb-0">
              {/* Dot */}
              <div
                className="absolute left-[-10px] top-2 w-5 h-5 rounded-full bg-gradient-to-tr from-sky-500 to-indigo-600 border-2 border-white shadow"
                aria-hidden="true"
              >
                <Briefcase className="w-3.5 h-3.5 text-white mx-auto mt-0.5" />
              </div>

              {/* Content Card */}
              <article className="bg-white p-5 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <header className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {exp.position}{" "}
                    {exp.current && (
                      <Badge className="ml-2 bg-sky-600 text-white text-xs px-2 py-0.5 rounded-full font-semibold select-none">
                        Current
                      </Badge>
                    )}
                  </h3>
                  <div className="flex space-x-4 mt-1 sm:mt-0 text-sm text-gray-500 whitespace-nowrap">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-sky-500" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4 text-sky-500" />
                      {exp.location}
                    </span>
                  </div>
                </header>

                {/* Full description from your original text */}
                <p className="mt-3 text-gray-700 text-sm md:text-base leading-relaxed">
                  {exp.description ===
                  "Leading web development and IT operations for international clients."
                    ? `Leading web development and IT operations for international clients, managing multiple projects simultaneously with a focus on scalability and security. Coordinated cross-functional teams to deliver high-quality digital solutions that meet client expectations and business goals.`
                    : exp.description}
                </p>

                {/* Achievements */}
                <details className="mt-4 text-gray-700 text-sm md:text-base">
                  <summary className="cursor-pointer font-semibold flex items-center gap-1 select-none">
                    <TrendingUp className="w-4 h-4 text-sky-600" />
                    Key Achievements
                  </summary>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    {exp.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </details>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className="bg-sky-100 text-sky-800 border border-sky-300 px-3 py-1 rounded-full text-xs md:text-sm font-medium"
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
