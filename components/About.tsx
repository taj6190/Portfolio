"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Database, Globe, Wrench } from "lucide-react";

/* ---------------------------------- DATA ---------------------------------- */
const highlights = [
  {
    icon: <Code className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />,
    title: "Front-End Development",
    description:
      "Proficient in building interactive UIs with React.js, Next.js, and Tailwind CSS.",
  },
  {
    icon: <Database className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />,
    title: "Back-End & Database",
    description:
      "Experienced with Node.js, Django, and working with MongoDB, MySQL, PostgreSQL.",
  },
  {
    icon: <Globe className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />,
    title: "IT Management",
    description:
      "Handled network systems, computer repairs, and tech support operations.",
  },
  {
    icon: <Wrench className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />,
    title: "Versatile Experience",
    description:
      "Worked across multiple domains, always eager to learn and adapt.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-10 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-neutral-950"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center max-w-3xl mx-auto">
          <Badge className="mb-4 bg-sky-100 text-sky-700 border-sky-200 text-xs sm:text-sm">
            About Me
          </Badge>
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-4 leading-tight text-gray-900 dark:text-white">
            Passionate About{" "}
            <span className="bg-gradient-to-r from-sky-600 to-indigo-600 bg-clip-text text-transparent">
              Technology
            </span>
          </h2>
          <p className="text-base sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
            Dedicated professional with a strong foundation in computer science
            and hands-on experience in web development, data, and IT management.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
          {highlights.map((item, index) => (
            <Card
              key={index}
              className="transition-shadow shadow-sm hover:shadow-md"
            >
              <CardContent className="p-5 sm:p-7">
                <div className="flex items-center gap-4">
                  <div className="p-2 rounded-full bg-sky-100 dark:bg-sky-800">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-100">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-sm sm:text-base text-slate-600 dark:text-slate-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
