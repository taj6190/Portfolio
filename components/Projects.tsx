"use client";

import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const projects = [
  {
    title: "E-Commerce Web Platform",
    description:
      "Full-stack e-commerce with React & Django. Auth, payments, admin panel.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    technologies: ["React", "Django", "JavaScript", "CSS", "PostgreSQL"],
    metrics: { users: "500+", performance: "95%", rating: 4.8 },
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
  },
  {
    title: "Corporate Website Redesign",
    description:
      "WordPress corporate site with custom theme, SEO, and 35% higher conversions.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["WordPress", "Elementor", "CSS", "JS", "PHP"],
    metrics: { traffic: "20%↑", conversion: "35%↑", rating: 4.9 },
    liveUrl: "#",
    githubUrl: "#",
    status: "Live",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Python-powered dashboard with real-time analytics & exportable reports.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    technologies: ["Python", "Django", "Chart.js", "PostgreSQL", "REST"],
    metrics: { accuracy: "98%", speed: "2s", rating: 4.7 },
    liveUrl: "#",
    githubUrl: "#",
    status: "In Development",
  },
  {
    title: "Learning Management System",
    description:
      "LearnDash-based LMS with course management, progress tracking & certification.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    technologies: ["WordPress", "LearnDash", "BuddyBoss", "JS", "MySQL"],
    metrics: { students: "1000+", completion: "85%", rating: 4.6 },
    liveUrl: "#",
    githubUrl: "#",
    status: "Completed",
  },
];

const statusColors: Record<string, string> = {
  Completed: "bg-green-600",
  Live: "bg-blue-600",
  "In Development": "bg-yellow-500",
};

export default function ProjectsSwiper() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="bg-blue-100 text-blue-700">Featured Projects</Badge>
          <h2 className="text-4xl font-extrabold mt-4 text-gray-900">
            Some of My{" "}
            <span className="bg-gradient-to-r from-sky-500 to-indigo-600 bg-clip-text text-transparent">
              Best Work
            </span>
          </h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={32}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: 4500 }}
        >
          {projects.map((project, idx) => (
            <SwiperSlide key={idx} className="pb-10">
              <article className="bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-[520px] max-w-sm mx-auto border border-gray-100">
                <div className="relative w-full h-56">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold text-white rounded-full ${
                      statusColors[project.status]
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-3 text-xs text-center text-gray-500 mb-6">
                    {Object.entries(project.metrics).map(([key, val]) => (
                      <div key={key}>
                        <p className="text-sm font-semibold text-gray-800">
                          {val}
                        </p>
                        <p className="capitalize">{key}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      className="flex-1 bg-indigo-600 text-white text-sm font-semibold py-2 rounded-md text-center hover:bg-indigo-700 transition"
                    >
                      <ExternalLink className="inline w-4 h-4 mr-1" />
                      Live
                    </Link>
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      className="flex-1 border border-indigo-600 text-indigo-600 text-sm font-semibold py-2 rounded-md text-center hover:bg-indigo-100 transition"
                    >
                      <Github className="inline w-4 h-4 mr-1" />
                      Code
                    </Link>
                  </div>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
