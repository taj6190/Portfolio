// components/HeroServer.tsx
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
      className="relative flex min-h-screen w-full items-center justify-center bg-slate-900 px-6 text-white lg:px-12"
    >
      {/* ── Animated Background Blobs ── */}
      <div className="absolute inset-0 -z-30 overflow-hidden">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 items-center w-full">
        {/* ── Left Column: Text ── */}
        <div className="space-y-6 text-center lg:text-left">
          <Badge className="bg-sky-500/20 text-sky-300">
            Available for Opportunities
          </Badge>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            MD Syedy{" "}
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Sulvy Taj
            </span>
          </h1>

          <p className="text-xl font-medium text-gray-300">
            <span className="text-sky-400">Web Developer</span> |{" "}
            <span className="text-indigo-400">IT Support & Management</span> |{" "}
            <span className="text-sky-300">Data Analyst</span>
          </p>

          <p className="max-w-xl mx-auto lg:mx-0 text-gray-400">
            Results-driven Computer Science graduate experienced in front-end
            development, IT support, and project management. Passionate about
            crafting scalable solutions and driving business growth.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-300 lg:justify-start">
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

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Button asChild size="lg" className="group">
              <Link href="#contact">
                <Mail className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get In Touch
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="group text-black"
            >
              <a href={links.cv} download>
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce text-black" />
                Download CV
              </a>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="group text-black"
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

        {/* ── Right Column: Profile Image ── */}
        <div className="relative mx-auto h-80 w-80 md:h-96 md:w-96">
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

          {/* Floating Skill Badges */}
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

      {/* Scroll Hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="h-10 w-6 rounded-full border-2 border-white/30 flex justify-center">
          <div className="mt-2 h-3 w-1 rounded-full bg-white/60" />
        </div>
      </div>
    </section>
  );
}
