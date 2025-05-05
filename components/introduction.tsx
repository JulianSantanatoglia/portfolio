"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Experience from "./experience";

const Introduction = () => {
  return (
    <div id="introduction" className="z-20 w-full bg-darkBg/60">
      <div className="gap-8 z-20 grid items-center h-full p-4 py-10 md:py-10 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-end lg:ml-auto lg:mr-15 pt-16 md:pt-0">
          <div className="w-full max-w-[300px] flex justify-end">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-950 rounded-full inline-block">
              <div className="p-1 bg-white rounded-full transition-transform duration-300 hover:scale-105">
                <Image
                  src="/foto.jpg"
                  priority
                  width={400}
                  height={400}
                  alt="Profile pic"
                  className="rounded-full"
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center max-w-2xl lg:max-w-xl">
          <h1 className="mb-4 text-2xl sm:text-lg leading-tight text-center md:text-left md:text-4xl lg:text-5xl text-balance">
            ¡Hola, Soy Julián!
            <br className="md:block" />
            Web
            <br className="block md:hidden" />
            <TypeAnimation
              sequence={[
                " Developer",
                1500,
                " Designer",
                1500,
          
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              className="font-bold text-blue-600"
              cursor={false}
            />
          </h1>
          <Experience />
          <p className="mx-auto mb-4 text-base md:mx-0 md:mb-10 mb-13 mt-8 lg:text-xl px-4 sm:px-0 text-center sm:text-left">
          Desarrollador web frontend con experiencia en la creación de interfaces de usuario modernas y funcionales, priorizando la optimización de la experiencia del usuario (UX) y la estética visual. Poseo conocimientos sólidos en el desarrollo backend, complementados con habilidades en diseño UI/UX. ¡Mira mi trabajo!
          </p>
          <div className="flex items-center justify-center gap-4 md:justify-start md:gap-8 lg:gap-10">
            <Link
              href="#portfolio"
              className="px-4 py-2 transition-all bg-blue-850/30 border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver trabajos
            </Link>
            <Link
              href="https://docs.google.com/document/d/e/2PACX-1vTwXzAINM7Nmgm1Pus3QPYtM6duus2Zn4qKhL7m5bgQTbXpmzDAlMB2xipI_AHeew/pub"
              className="px-4 py-2 transition-all border-2 cursor-pointer text-white bg-blue-950/80  border-white-500 text-md w-fit rounded-xl hover:shadow-xl hover:shadow-blue-500"
              download="cv-jsantanatoglia-SPA.pdf"
              target="_blank"
            >
              CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
