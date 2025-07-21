// // app/page.tsx
// import About from "@/components/About";
// import Experience from "@/components/Experience";
// import Hero from "@/components/Hero";
// import Projects from "@/components/Projects";
// import ScrollProgress from "@/components/ScrollProgress";
// import ScrollSection from "@/components/ScrollSection";
// import Skills from "@/components/Skills";
// import TechStack from "@/components/TechStack";

// export default function Home() {
//   const sections = [
//     { component: <Hero />, id: "hero" },
//     { component: <About />, id: "about" },
//     { component: <TechStack />, id: "TechStack" },
//     { component: <Experience />, id: "experience" },
//     { component: <Projects />, id: "projects" },
//     { component: <Skills />, id: "skills" },
//   ];

//   return (
//     <>
//       <ScrollProgress />

//       {sections.map(({ component, id }, idx) => (
//         <ScrollSection key={id} delay={idx * 100} className="min-h-screen">
//           <section id={id} className="scroll-mt-20">
//             {component}
//           </section>

//           {/* Chevron between sections */}
//           {idx < sections.length - 1 && (
//             <div className="flex justify-center pt-10 pb-12">
//               <svg
//                 className="w-6 h-6 text-gray-400 animate-bounce"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth={2}
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </div>
//           )}
//         </ScrollSection>
//       ))}
//     </>
//   );
// }
import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
    </>
  );
}


can you do something with my page.tsx so it will look better also add the progress bar at the rigt
