"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const links = {
  linkedin: "https://linkedin.com/in/sulvytaj",
  cv: "/cv-sulvy-taj.pdf",
  email: "syedtaj1234@gmail.com",
  phone: "+8801625456190",
  location: "Dhaka, Bangladesh",
};

export default function HeroServer() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center justify-center bg-slate-900 px-4 pt-32 pb-32 sm:px-6 sm:pt-40 sm:pb-20 text-white"
    >
      {/* Background Blobs */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <div className="absolute left-10 top-20 h-60 w-60 sm:h-72 sm:w-72 rounded-full bg-sky-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">
        {/* Left: Text */}
        <div className="space-y-5 text-center lg:text-left px-2 sm:px-0">
          <Badge className="bg-sky-500/20 text-sky-300 text-xs sm:text-sm px-3 py-1">
            Available for Opportunities
          </Badge>

          <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight tracking-tight">
            MD Syedy{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Sulvy Taj
            </span>
          </h1>

          <p className="text-sm sm:text-lg font-medium text-gray-300">
            <span className="text-sky-400">Web Developer</span> |{" "}
            <span className="text-indigo-400">IT Support</span> |{" "}
            <span className="text-sky-300">Data Analyst</span>
          </p>

          <p className="text-sm sm:text-base text-gray-400 max-w-lg mx-auto lg:mx-0">
            Computer Science graduate with experience in frontend development,
            IT support, and project coordination. Focused on scalable,
            business-oriented solutions.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-4 gap-y-2 text-sm text-gray-300">
            <span className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-sky-400" />
              {links.location}
            </span>
            <span className="flex items-center gap-1">
              <Phone className="h-4 w-4 text-indigo-400" />
              {links.phone}
            </span>
            <span className="flex items-center gap-1">
              <Mail className="h-4 w-4 text-sky-400" />
              {links.email}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button asChild size="sm" className="group text-sm sm:text-base">
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get In Touch
              </Link>
            </Button>

            <Button
              variant="outline"
              size="sm"
              asChild
              className="group text-black text-sm sm:text-base"
            >
              <a href={links.cv} download>
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce text-black" />
                Download CV
              </a>
            </Button>

            <Button
              variant="outline"
              size="sm"
              asChild
              className="group text-black text-sm sm:text-base"
            >
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>

        {/* Right: Image */}
        <div className="relative mx-auto h-60 w-60 sm:h-80 sm:w-80 md:h-96 md:w-96">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 blur-2xl opacity-40" />
          <div className="relative overflow-hidden rounded-full border-4 border-sky-500/30 shadow-2xl">
            <Image
              src="/profile.jpg"
              alt="MD Syedy Sulvy Taj"
              width={400}
              height={400}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Floating Skill Tags */}
          <div className="absolute -top-3 -right-3 rounded-full bg-sky-500 px-2 py-1 text-xs font-bold text-white shadow-lg animate-pulse">
            React
          </div>
          <div className="absolute -bottom-3 left-1/4 rounded-full bg-indigo-500 px-2 py-1 text-xs font-bold text-white shadow-lg animate-pulse [animation-delay:1s]">
            Python
          </div>
          <div className="absolute top-1/3 -left-3 rounded-full bg-emerald-500 px-2 py-1 text-xs font-bold text-white shadow-lg animate-pulse [animation-delay:2s]">
            JavaScript
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-8 w-4 rounded-full border-2 border-white/30 flex justify-center">
          <div className="mt-1 h-2 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
