"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Briefcase, Code, Globe } from "lucide-react";

export default function About() {
  const highlights = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description:
        "Expertise in React, JavaScript, and modern web technologies.",
    },
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "IT Support & Management",
      description: "Experience in technical operations and project leadership.",
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Data Analysis",
      description: "Skilled with Excel, SQL, and data visualization tools.",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "International Experience",
      description: "Worked with global clients and remote teams.",
    },
  ];

  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Bangla", level: "Fluent" },
    { name: "French", level: "Basic" },
    { name: "Hindi", level: "Basic" },
  ];

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-slate-50 to-slate-100 py-24"
    >
      <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <Badge className="mb-5 bg-sky-100 text-sky-700 border-sky-200">
            About Me
          </Badge>
          <h2 className="text-5xl font-extrabold mb-5 leading-tight text-gray-900">
            Passionate About{" "}
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          <p className="mx-auto text-xl text-slate-700 leading-relaxed">
            Dedicated professional with a strong foundation in computer science
            and hands-on experience in web development, data, and IT management.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-10">
            {/* My Journey */}
            <Card className="bg-white/70 backdrop-blur border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-10">
                <h3 className="mb-6 text-3xl font-bold text-slate-800">
                  My Journey
                </h3>
                <p className="mb-5 text-lg text-slate-700 leading-relaxed">
                  Results-driven Computer Science graduate with solid experience
                  in frontend development, IT support, and project management.
                  Skilled in modern web frameworks, with a knack for solving
                  problems and optimizing systems.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Successfully led cross-functional teams and collaborated with
                  international stakeholders to deliver efficient solutions. Now
                  seeking roles that leverage both technical and leadership
                  skills.
                </p>
              </CardContent>
            </Card>

            {/* Languages */}
            <Card className="bg-white/70 backdrop-blur border border-slate-200 shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-10">
                <h3 className="mb-8 text-2xl font-bold text-slate-800">
                  Languages
                </h3>
                <div className="grid grid-cols-2 gap-x-10 gap-y-4 text-lg">
                  {languages.map((lang) => (
                    <div
                      key={lang.name}
                      className="flex items-center justify-between"
                    >
                      <span className="font-semibold text-slate-800">
                        {lang.name}
                      </span>
                      <Badge className="bg-sky-100 text-sky-700 px-3 py-1 rounded-lg">
                        {lang.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column: Highlights */}
          <div className="space-y-8">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="group border border-slate-200 bg-white/70 backdrop-blur shadow-md hover:shadow-lg transition duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-sky-100 text-sky-700 transition group-hover:bg-sky-600 group-hover:text-white">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-800 group-hover:text-sky-600 transition-colors">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-slate-600 text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
