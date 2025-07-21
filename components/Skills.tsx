"use client";

import {
  BadgeCheck,
  Brain,
  Code,
  MonitorSmartphone,
  Server,
  Wrench,
} from "lucide-react";

import { Badge } from "./ui/badge";

const skillGroups = [
  {
    label: "Frontend",
    icon: <MonitorSmartphone className="w-5 h-5 text-indigo-600" />,
    items: [
      { name: "HTML/CSS", level: 5 },
      { name: "ReactJS", level: 5 },
      { name: "Responsive Design", level: 4 },
      { name: "Sass", level: 4 },
    ],
  },
  {
    label: "Backend & Database",
    icon: <Server className="w-5 h-5 text-emerald-600" />,
    items: [
      { name: "Django", level: 4 },
      { name: "API Development", level: 4 },
      { name: "SQL", level: 4 },
      { name: "Database Design", level: 4 },
    ],
  },
  {
    label: "Programming",
    icon: <Code className="w-5 h-5 text-sky-600" />,
    items: [
      { name: "JavaScript", level: 5 },
      { name: "Python", level: 4 },
      { name: "Java", level: 3 },
    ],
  },
  {
    label: "Tools & CMS",
    icon: <Wrench className="w-5 h-5 text-amber-600" />,
    items: [
      { name: "WordPress", level: 4 },
      { name: "Elementor", level: 4 },
      { name: "Git", level: 4 },
    ],
  },
];

const certifications = [
  "Responsive Web Design",
  "React Development",
  "Database Management",
  "JavaScript Algorithms",
];

const softSkills = [
  "Problem Solving",
  "Critical Thinking",
  "Leadership",
  "Client Communication",
  "Project Management",
];

const levelDots = (level: number) =>
  Array.from({ length: 5 }).map((_, i) => (
    <span
      key={i}
      className={`h-2.5 w-2.5 rounded-full ${
        i < level ? "bg-sky-600" : "bg-gray-300"
      }`}
    />
  ));

export default function SkillsServer() {
  return (
    <section id="skills" className="bg-slate-50 py-20 px-6">
      <div className="text-center mb-16">
        <Badge className="bg-blue-100 text-blue-700">Skills</Badge>
      </div>
      <div className="max-w-[1100px] mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight">
            Skills &{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">
              Technologies
            </span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg max-w-xl mx-auto">
            A blend of technical capabilities and problem-solving acumen.
          </p>
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 gap-10">
          {skillGroups.map(({ label, items, icon }) => (
            <div key={label} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-3 mb-4">
                {icon}
                <h4 className="text-lg font-semibold text-gray-800">{label}</h4>
              </div>
              <ul className="space-y-3">
                {items.map(({ name, level }) => (
                  <li key={name} className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">{name}</span>
                    <div className="flex gap-1">{levelDots(level)}</div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications & Soft Skills */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          <div className="bg-sky-600 text-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <BadgeCheck className="w-5 h-5" />
              <h4 className="text-lg font-semibold">Certifications</h4>
            </div>
            <ul className="space-y-2 pl-4 list-disc text-sm">
              {certifications.map((cert) => (
                <li key={cert}>{cert}</li>
              ))}
            </ul>
          </div>
          <div className="bg-indigo-600 text-white rounded-xl p-6 shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-5 h-5" />
              <h4 className="text-lg font-semibold">Soft Skills</h4>
            </div>
            <ul className="space-y-2 pl-4 list-disc text-sm">
              {softSkills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
