"use client";

import Link from "next/link";
import { CircleFlag } from "react-circle-flags";
import { Check } from "lucide-react";
import { socialNetworks } from "../data";
import { useLanguage } from "./language-provider";

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
      <header className="absolute z-50 w-full top-5 md:top-10">
        <div className="container px-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <Link href="#introduction">
            <h1 className="my-3 text-2xl font-bold text-center md:text-left md:text-4xl text-white">
              Julian <span className="text-sky-600">Santanatoglia</span>
            </h1>
          </Link>
          <div className="flex items-center justify-center gap-6 md:gap-7 mt-3 md:mt-0">
            <div className="relative inline-flex items-center rounded-full border border-blue-300/40 bg-blue-950/70 p-1 backdrop-blur-sm">
              <span
                className={`pointer-events-none absolute top-1 h-8 w-8 rounded-full bg-cyan-300/20 ring-1 ring-cyan-300/60 shadow-[0_0_12px_rgba(34,211,238,0.45)] transition-transform duration-300 ease-out ${
                  language === "es" ? "translate-x-0" : "translate-x-8"
                }`}
                aria-hidden="true"
              />

              <button
                type="button"
                onClick={() => setLanguage("es")}
                className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 ${
                  language === "es"
                    ? "opacity-100"
                    : "opacity-55 grayscale brightness-75 hover:opacity-80"
                }`}
                aria-label="Cambiar idioma a español"
                title="Español"
              >
                <CircleFlag countryCode="es" height="18" />
                <Check
                  className={`pointer-events-none absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-cyan-300 text-slate-900 p-[1px] transition-all duration-200 ${
                    language === "es" ? "scale-100 opacity-100" : "scale-75 opacity-0"
                  }`}
                />
              </button>

              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-200 ${
                  language === "en"
                    ? "opacity-100"
                    : "opacity-55 grayscale brightness-75 hover:opacity-80"
                }`}
                aria-label="Switch language to English"
                title="English"
              >
                <CircleFlag countryCode="us" height="18" />
                <Check
                  className={`pointer-events-none absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-cyan-300 text-slate-900 p-[1px] transition-all duration-200 ${
                    language === "en" ? "scale-100 opacity-100" : "scale-75 opacity-0"
                  }`}
                />
              </button>
            </div>
            {socialNetworks.map(({ logo, src, id }) => (
              <Link
                key={id}
                href={src}
                target="_blank"
                className="transition-all duration-300 hover:text-blue-500 z-41"
              >
                {logo}
              </Link>
            ))}
          </div>
        </div>
      </header>
  );
};

export default Header;