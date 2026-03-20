"use client";

import Contact from "../../components/contact";
import CoverParticles from "../../components/cover-particles";
import Footer from "../../components/footer";
import Introduction from "../../components/introduction";
import Navbar from "../../components/navbar";
import Skills from "../../components/skills";
import Timeline from "../../components/timeline";
import TransitionPage from "../../components/transition-page";
import ProjectCarousel from "../../components/ProjectCarousel";
import Certifications from "../../components/certifications";
import ScrollToTop from "../../components/scroll-to-top";
import { projects } from "../../data";
import { motion } from "framer-motion";

export default function Home() {
  const reveal = {
    initial: { opacity: 0, y: 28, filter: "blur(4px)" },
    whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
    viewport: { once: true, amount: 0.25 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <>
      <main>
        <TransitionPage />
        <Navbar />
        <div className="relative flex min-h-screen bg-no-repeat bg-gradient-cover bg-gray-900 overflow-x-hidden">
          <CoverParticles />
          <Introduction />
        </div>
        <motion.div id="portfolio" className="relative text-center mb-10 pt-20" {...reveal}>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <h2 className="relative text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mb-4">
            Portfolio de Proyectos
          </h2>
          <p className="relative text-lg text-gray-400 max-w-2xl mx-auto">
            Una selección de mis trabajos más destacados y colaboraciones profesionales
          </p>
        </motion.div>
        <motion.div className="bg-gray-900 w-full max-w-6xl px-4 pb-20 md:pb-20 mx-auto mt-10 md:px-6" {...reveal}>
          <ProjectCarousel projects={projects} />
        </motion.div>
        <motion.div {...reveal}>
          <Skills />
        </motion.div>
        <motion.div {...reveal}>
          <Timeline />
        </motion.div>
        <motion.div {...reveal}>
          <Certifications />
        </motion.div>
        <motion.div {...reveal}>
          <Contact />
          <Footer />
        </motion.div>
        <ScrollToTop />
      </main>
    </>
  );
}
