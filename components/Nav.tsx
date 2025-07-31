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
    const onScroll = () => setScrolled(window.scrollY > 1200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ultra-clean white glass */
  const desktopBgInitial = "rgba(255, 255, 255, 0.1)";
  const desktopBgScrolled = "rgba(  0,   0,   0, 0.5)";

  return (
    <>
      {/* DESKTOP / MOBILE BAR */}
      <nav className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-center px-4">
        {/* Blurred pill wrapper */}
        <motion.div
          className="hidden mt-5 sm:flex h-12 max-w-xl flex-1 items-center justify-center rounded-full border border-white/20 bg-clip-padding px-3 shadow-lg backdrop-blur-md"
          animate={{
            backgroundColor: scrolled ? desktopBgScrolled : desktopBgInitial,
          }}
          transition={{ duration: 0.2 }}
        >
          <ul className="flex items-center gap-x-3 text-sm font-semibold">
            {navLinks.map((l) => (
              <li key={l}>
                <Link
                  href={`#${l.toLowerCase().replace(/\s/g, "")}`}
                  className="rounded-md px-2.5 py-1.5 text-white transition-colors hover:text-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  {l}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Hamburger (mobile) */}
        <button
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          className="ml-auto p-2 text-neutral-100 transition-colors hover:text-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 sm:hidden"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm sm:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />

            <motion.aside
              className="fixed inset-y-0 right-0 z-50 flex w-4/5 max-w-xs flex-col bg-gray-950 p-5 text-white shadow-2xl sm:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
            >
              <header className="flex items-center justify-between pb-6">
                <h2 className="text-base font-medium">Menu</h2>
                <button
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="-mr-2 rounded-full p-2 text-gray-300 transition hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                >
                  <X size={20} />
                </button>
              </header>

              <nav className="flex flex-col space-y-3">
                {navLinks.map((l) => (
                  <Link
                    key={l}
                    href={`#${l.toLowerCase().replace(/\s/g, "")}`}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-md px-3 py-2 text-lg font-medium text-gray-200 transition-colors hover:bg-gray-800 hover:text-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
                  >
                    {l}
                  </Link>
                ))}
              </nav>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
