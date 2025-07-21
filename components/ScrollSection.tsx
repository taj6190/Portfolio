"use client";

import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function ScrollSection({
  children,
  delay = 0,
  className = "",
}: Props) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transformOrigin: "center",
      }}
      className={`
        transition-all duration-[1000ms] ease-[cubic-bezier(0.2,0.8,0.2,1)]
        ${className}
        ${
          inView
            ? "opacity-100 translate-y-0 scale-100 blur-0 rotate-0"
            : "opacity-0 translate-y-10 scale-[0.96] blur-sm rotate-[0.3deg]"
        }
      `}
    >
      {children}
    </div>
  );
}
