// components/Footer.tsx
import { personal } from "@/data";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="max-w-sm mx-auto px-4 py-4 text-center font-sans text-gray-700 border-t border-gray-300">
      <p className="text-base font-semibold mb-2">{personal.name}</p>
      <div className="flex flex-col items-center space-y-2 text-sm">
        <a
          href={`mailto:${personal.email}`}
          className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors break-words"
          aria-label={`Send email to ${personal.email}`}
        >
          <Mail className="w-4 h-4 flex-shrink-0" />
          <span>{personal.email}</span>
        </a>
        <div className="flex items-center gap-2 text-gray-500 select-text">
          <Phone className="w-4 h-4 flex-shrink-0" />
          <span>{personal.phone}</span>
        </div>
      </div>
    </footer>
  );
}
