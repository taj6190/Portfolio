// components/Footer.tsx
import { personal } from "@/data";

export default function Footer() {
  return (
    <footer className="sticky bottom-0 z-50 mx-auto mt-auto w-full max-w-7xl rounded-t-3xl border-t border-white/20 bg-white/60 backdrop-blur-md px-6 py-4 text-center text-sm text-slate-600 shadow-lg">
      © {new Date().getFullYear()} {personal.name}. All rights reserved.
    </footer>
  );
}
