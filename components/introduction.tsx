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
          <h1 className="mb-4 text-2xl sm:text-lg leading-tight text-center md:text-left md:text-4xl lg:text-5xl text-balance">
            Si tienes una idea,
            <br className="md:block" />
            podemos
            <br className="block md:hidden" />
            <TypeAnimation
              sequence={[
                " diseñarla",
                1500,
                " desarrollarla",
                1500,
                " desplegarla",
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
            ¡Hola!👋 Soy Julián, Desarrollador web Frontend con experiencia en
            la creacion de sitios web modernos y funcionales, enfocados en la
            mejor experiencia de usuario con diseños atractivo.
          </p>
          <div className="flex items-center justify-center gap-4 md:justify-start md:gap-8 lg:gap-10">
            <Link
              href="#portfolio"
              className="px-4 py-2 transition-all bg-blue-850/30 border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
            >
              Ver trabajos
            </Link>
            <Link
              href="../cv.pdf"
              className="px-4 py-2 transition-all border-2 cursor-pointer text-white bg-blue-950/80  border-white-500 text-md w-fit rounded-xl hover:shadow-xl hover:shadow-blue-500"
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
