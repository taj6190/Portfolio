"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = ["About", "Experience", "Projects", "Skills", "Tech Stack"];

const variants = {
  top: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderColor: "rgba(255, 255, 255, 0.2)",
    color: "white",
  },
  scrolled: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    color: "white",
  },
};

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={variants}
      transition={{ duration: 0.4 }}
      className="fixed top-12 left-1/2 z-50 -translate-x-1/2 rounded-full border px-6 py-3 backdrop-blur-md shadow-md flex items-center"
      style={{ color: "white", minWidth: 320 }}
    >
      <ul className="flex flex-wrap gap-6 text-sm font-medium items-center">
        {navLinks.map((item) => (
          <li key={item}>
            <Link
              href={`#${item.toLowerCase().replace(/\s/g, "")}`}
              scroll={true}
              className="transition-colors rounded px-2 py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 hover:text-sky-400"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
