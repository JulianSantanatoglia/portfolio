"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { itemsNavbar } from "../data";
import MotionTransition from "./transition-component";

const Navbar = () => {
  const sectionIds = useMemo(
    () => itemsNavbar.map((item) => item.link.replace("#", "")),
    []
  );
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] ?? "");

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (!elements.length) return;

    const getActiveByScroll = () => {
      const marker = window.innerHeight * 0.42;
      let current = elements[0]?.id ?? "";

      for (const section of elements) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= marker && rect.bottom >= marker) {
          current = section.id;
          break;
        }

        if (rect.top <= marker) {
          current = section.id;
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        getActiveByScroll();
        rafId = 0;
      });
    };

    getActiveByScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [sectionIds]);

  return (
    <MotionTransition
      position="right"
      className="fixed z-40 flex flex-col items-center justify-center w-full bottom-0 md:bottom-10"
    >
      <nav className="w-full md:w-auto" role="navigation" aria-label="Navegación principal">
        <div className="flex items-center justify-center gap-2 md:gap-4 px-4 md:px-6 py-2 md:rounded-full bg-blue-950/80 backdrop-blur-md overflow-x-auto">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`relative px-3 md:px-4 py-2 md:py-3 transition duration-200 rounded-full cursor-pointer flex-shrink-0 focus-within:ring-2 focus-within:ring-blue-400 focus-within:ring-offset-2 focus-within:ring-offset-blue-950 ${
                activeSection === item.link.replace("#", "")
                  ? "bg-gradient-to-r from-cyan-400/20 to-blue-500/20 shadow-[0_0_18px_rgba(59,130,246,0.32)] ring-1 ring-cyan-300/35"
                  : "hover:bg-sky-600/55"
              }`}
            >
              <span
                className={`pointer-events-none absolute -bottom-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full transition-all duration-300 ${
                  activeSection === item.link.replace("#", "")
                    ? "bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.85)] opacity-100"
                    : "opacity-0"
                }`}
              />
              <Link 
                href={item.link}
                aria-label={item.title}
                className="focus:outline-none"
                onClick={() => setActiveSection(item.link.replace("#", ""))}
              >
                {item.icon}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;