"use client";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import Experience from "./experience";
import { Sparkles, Download, ArrowRight } from "lucide-react";

const Introduction = () => {
  return (
    <div id="introduction" className="relative z-20 w-full bg-darkBg/60 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative gap-8 z-20 grid items-center h-full p-4 py-10 md:py-10 lg:grid-cols-2">
        <div className="flex justify-center lg:justify-end lg:ml-auto lg:mr-15 pt-16 md:pt-0">
          <div className="w-full max-w-[300px] flex justify-end">
            <div className="relative group">
              {/* Animated ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-75 group-hover:opacity-100 blur-lg group-hover:blur-xl transition duration-1000 animate-pulse"></div>
              
              <div className="relative p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-950 rounded-full inline-block">
                <div className="p-1 bg-white rounded-full transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
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
              
              {/* Status indicator */}
              <div className="absolute bottom-6 right-6 flex items-center gap-2 bg-green-500/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-green-400/50 shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-white">Disponible</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center max-w-2xl lg:max-w-xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full w-fit mx-auto md:mx-0 mb-4">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-400 font-medium">Frontend Developer & Designer</span>
          </div>

          <h1 className="mb-4 text-3xl sm:text-4xl leading-tight text-center md:text-left md:text-5xl lg:text-6xl text-balance">
            <span className="block text-gray-300">¡Hola, soy</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 font-bold">
              Julián!
            </span>
            <span className="block text-gray-300">
              Web
              <TypeAnimation
                sequence={[
                  " Developer",
                  1500,
                  " Designer",
                  1500,
                  " Creator",
                  1500,
                ]}
                wrapper="span"
                speed={40}
                repeat={Infinity}
                className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 ml-2"
                cursor={false}
              />
            </span>
          </h1>

          <Experience />

          <p className="mx-auto mb-6 text-base md:mx-0 md:mb-10 mt-8 lg:text-lg px-4 sm:px-0 text-center sm:text-left text-gray-300 leading-relaxed">
            Soy desarrollador web con especialización en frontend, apasionado por crear 
            <span className="text-blue-400 font-semibold"> experiencias digitales que marquen la diferencia</span>. 
            Mi enfoque combina código limpio, diseño funcional y una constante búsqueda de la mejor experiencia de usuario. 
            Aunque mi fuerte es el frontend, también manejo backend y diseño UI/UX, lo que me permite tener una 
            <span className="text-purple-400 font-semibold"> visión integral de cada proyecto</span>. 
            ¡Te invito a conocer mi trabajo!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 md:justify-start md:gap-6 lg:gap-8">
            <Link
              href="#portfolio"
              className="group relative px-4 py-2.5 sm:px-6 sm:py-3 transition-all cursor-pointer text-sm sm:text-md w-full sm:w-fit rounded-xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 transition-transform group-hover:scale-110"></div>
              <div className="relative flex items-center justify-center gap-2 text-white font-semibold">
                <span>Ver trabajos</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>

            <Link
              href="https://docs.google.com/document/d/e/2PACX-1vQ-By5TvYJfDYxkHmlmtiCQ5Crk-xkpTXCEZlcDyQCEufLNIRL5ntdo5anlJ9usMsP0c4IfjxjLdmAJ/pub"
              className="group px-4 py-2.5 sm:px-6 sm:py-3 transition-all border-2 cursor-pointer text-white bg-transparent border-gray-600 hover:border-blue-500 text-sm sm:text-md w-full sm:w-fit rounded-xl hover:shadow-xl hover:shadow-blue-500/50 relative overflow-hidden"
              download="cv-jsantanatoglia-SPA.pdf"
              target="_blank"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex items-center justify-center gap-2 font-semibold">
                <Download className="w-4 h-4" />
                <span>Descargar CV</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
