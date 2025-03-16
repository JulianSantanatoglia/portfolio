"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Experience from "./experience";

const Introduction = () => {
  return (
    <div id="introduction" className="z-20 w-full bg-darkBg/60">
      <div className="gap-8 z-20 grid items-center h-full p-6 py-16 md:py-10 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-start lg:pl-20 xl:pl-40">
          <Image
            src="/home-4.png"
            priority
            width={400}
            height={400}
            alt="Profile pic"
            className="max-w-full h-auto"
          />
        </div>
        <div className="flex flex-col justify-center max-w-2xl">
          <h1 className="mb-6 text-3xl leading-tight text-center md:text-left md:text-4xl lg:text-5xl">
            Si tienes una idea,
            <br className="md:hidden" /> {/* Salto de línea solo en mobile */}
            podemos
            <TypeAnimation
              sequence={[
                " implementarla",
                1000,
                " desarrollarla",
                1000,
                " programarla",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-bold text-blue-600"
            />
          </h1>
          <Experience />
          <p className="mx-auto mb-4 text-lg md:mx-0 md:mb-10 lg:text-xl">
            ¡Hola! Soy Desarrollador Frontend con amplia experiencia dedicado a
            la creación de interfaces de usuario innovadoras y funcionales.
          </p>
          <div className="flex items-center justify-center gap-4 md:justify-start md:gap-8 lg:gap-10">
            <Link
              href="#portfolio"
              className="px-4 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Proyectos
            </Link>
            <Link
              href="../cv.pdf"
              className="px-4 py-2 transition-all border-2 cursor-pointer text-white bg-blue-600 border-blue-500 text-md w-fit rounded-xl hover:shadow-xl hover:shadow-blue-500"
              download="../cv.pdf"
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