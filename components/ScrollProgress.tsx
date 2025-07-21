"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      setWidth(scrolled);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-2 z-[100]">
      <div
        className="h-full rounded-r-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 shadow-[0_0_10px_rgba(255,255,255,0.7)]"
        style={{
          width: `${width}%`,
          transition: "width 200ms ease-in-out",
          boxShadow:
            "0 0 8px rgba(129, 140, 248, 0.6), 0 0 12px rgba(34, 211, 238, 0.4)",
        }}
      />
    </div>
  );
}
