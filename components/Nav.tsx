"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // You can use any icon lib or SVG
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 100);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on navigation link click (mobile)
  function handleLinkClick() {
    setMenuOpen(false);
  }

  return (
    <motion.nav
      initial="top"
      animate={scrolled ? "scrolled" : "top"}
      variants={variants}
      transition={{ duration: 0.4 }}
      className="fixed top-12 left-1/2 z-50 -translate-x-1/2 rounded-full border backdrop-blur-md shadow-md flex items-center px-6 py-3"
      style={{ color: "white", minWidth: 320 }}
    >
      {/* Desktop & Tablet nav */}
      <ul className="hidden sm:flex flex-wrap gap-6 text-sm font-medium items-center">
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

      {/* Mobile hamburger menu button */}
      <button
        className="sm:hidden ml-auto text-white focus:outline-none focus:ring-2 focus:ring-sky-400 rounded"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-40 rounded-md bg-black bg-opacity-80 border border-white border-opacity-30 backdrop-blur-md shadow-lg flex flex-col gap-3 p-4 sm:hidden"
        >
          {navLinks.map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase().replace(/\s/g, "")}`}
                scroll={true}
                className="block px-3 py-2 rounded text-white hover:text-sky-400 transition-colors"
                onClick={handleLinkClick}
              >
                {item}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
