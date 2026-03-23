"use client";

import { useLanguage } from "./language-provider";

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="relative z-10 bg-transparent text-gray-200 py-8 pb-20 md:pb-24 text-center font-sans text-sm">
      <div className="max-w-4xl mx-auto px-4">
        <p>
          &copy; {new Date().getFullYear()} Julian Santanatoglia.{" "}
          {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
        </p>
        <nav className="mt-4">
        </nav>
      </div>
    </footer>
  );
};

export default Footer;