"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = ["About", "Experience", "Projects", "Skills", "Tech Stack"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 1000);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barCls =
    "fixed top-5 right-4 sm:top-6 sm:left-1/2 sm:-translate-x-1/2 " +
    "z-50 flex items-center rounded-full border border-white/20 backdrop-blur-md shadow-md " +
    "px-3 py-2 sm:px-6 sm:py-3 bg-white/10 " +
    "w-max max-w-[90vw]"; // ❶ never wider than 90 % of viewport

  return (
    <>
      {/* bar */}
      <motion.nav
        className={barCls}
        animate={{
          backgroundColor: scrolled
            ? "rgba(20, 20, 20, 0.5)" // dark but transparent
            : "rgba(240, 240, 240, 0.5)", // light gray and soft
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {/* desktop links */}
        <ul className="hidden sm:flex gap-6 text-sm font-medium">
          {navLinks.map((l) => (
            <li key={l}>
              <Link
                href={`#${l.toLowerCase().replace(/\s/g, "")}`}
                className="px-2 py-1 rounded transition-colors hover:text-sky-400 focus-visible:ring-2 focus-visible:ring-sky-400"
              >
                {l}
              </Link>
            </li>
          ))}
        </ul>

        {/* hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="sm:hidden ml-auto p-1 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <Menu size={24} />
        </button>
      </motion.nav>

      {/* mobile canvas menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="backdrop"
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              key="drawer"
              className="fixed top-0 right-0 z-50 h-full w-4/5 bg-gray-900 p-6 sm:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
            >
              <header className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-white">Menu</h2>
                <button
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="p-1 text-white focus:outline-none focus:ring-2 focus:ring-sky-400"
                >
                  <X size={24} />
                </button>
              </header>

              <ul className="flex flex-col gap-4">
                {navLinks.map((l) => (
                  <li key={l}>
                    <Link
                      href={`#${l.toLowerCase().replace(/\s/g, "")}`}
                      className="text-lg text-white hover:text-sky-400"
                      onClick={() => setMenuOpen(false)}
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
