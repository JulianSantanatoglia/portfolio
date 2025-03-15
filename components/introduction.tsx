"use client"
import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';
import Experience from './experience';

const Introduction = () => {
    return (
        <div id="introduction" className='z-20 w-full bg-darkBg/60 '>
<div className='gap-3.5 z-20 grid items-center h-full md:pl-70 p-6 py-20 md:py-6 md:grid-cols-2'>
            <Image className='pl-0 lg:pl-[150px]' src="/home-4.png" priority width="600" height="600" alt="Profile pic"/>
            <div className='flex flex-col justify-center max-w-md'>
            <h1 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl'>
                Si tienes una idea, podemos
                <TypeAnimation
                sequence={[" implementarla",
                    1000,
                    " desarrollarla",
                    1000,
                    " programarla",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                className='font-bold text-blue-600'
                />
            </h1>
            <Experience />
            <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>
            ¡Hola! Soy Desarrollador Frontend con amplia experiencia dedicado a la creación de interfaces de usuario innovadoras y funcionales. 
            </p>
            <div className='flex item-center justify-center gap-3 md:justify-start md:gap-10'>
                    <Link href="#portfolio" 
                    className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                        Proyectos
                    </Link>
                    <Link href="../cv.pdf" 
                    className='px-3 py-2 transition-all border-2 cursor-pointer text-white-500 bg-blue-600 border-blue-500 text-md w-fit rounded-xl hover:shadow-xl hover:shadow-blue-500' download="../cv.pdf">
                    CV
                    </Link>
            </div>
            </div>
        </div> 
    </div>
    )
}
    export default Introduction;