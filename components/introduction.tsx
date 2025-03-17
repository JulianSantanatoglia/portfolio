"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Experience from "./experience";

const Introduction = () => {
  return (
    <div id="introduction" className="z-20 w-full bg-darkBg/60">
      <div className="gap-8 z-20 grid items-center h-full p-4 py-10 md:py-10 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-end lg:pr-20 xl:pr-40 pt-16 md:pt-0"> 
          <div className="w-full max-w-[300px]">
            <Image
              src="/home-4.png"
              priority
              width={400}
              height={400}
              alt="Profile pic"
              className="w-full h-auto"
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center max-w-2xl">
        <h1 className="mb-4 text-2xl leading-tight text-center md:text-left md:text-4xl lg:text-5xl">
  Si tienes una idea,
  <br className="hidden md:block" /> 
  podemos
  <TypeAnimation
    sequence={[
      " diseñarla",
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
          <p className="mx-auto mb-4 text-base md:mx-0 md:mb-10 lg:text-xl">
            ¡Hola! Soy Julián, Desarrollador web Frontend con experiencia en diseño. Construyo sitios web modernos y funcionales, enfocados en la mejor experiencia de usuario.
          </p>
          <div className="flex items-center justify-center gap-4 md:justify-start md:gap-8 lg:gap-10">
            <Link
              href="#portfolio"
              className="px-4 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver trabajos
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