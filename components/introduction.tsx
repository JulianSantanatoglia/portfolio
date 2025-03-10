"use client"
import { Type } from 'lucide-react';
import Image from 'next/image'
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className='z-20 w-full bg-darkBg/60'>
            <div className='z-20 grid items-center h-full p-6 py-20 md:grid-cols-2'>
            <Image src="/home-4.png" priority width="400" height="400" alt="Profile pic"/>
            <div className='flex flex-col justify-center max-w-md'>
            <h1 className='mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-19'>
                If you can think it, you can
                <TypeAnimation
                sequence={[" develop it",
                    1000,
                    " optimize it",
                    1000,
                    " implement it",
                    1000,
                ]}
                wrapper='span'
                speed={50}
                repeat={Infinity}
                className='font-bold text-blue-600'
                />
            </h1>
            
            <p className='mx-auto mb-2 text-xl md:mx-0 md:mb-8'>
            I am a passionate frontend developer with experience building modern and functional user interfaces using React. My primary focus is combining my development knowledge with a solid understanding of design to create exceptional web experiences
            </p>
            <div className='flex item-center justify-center gap-3 md:justify-start md:gap-10'>
                    <Link href="/proyects" 
                    className='px-3 py-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                        Proyects
                    </Link>
                    <Link href="/contact" 
                    className='px-3 py-2 transition-all border-2 cursor-pointer text-blue-500 border-blue-500 text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                        Contact me
                    </Link>
                    <Link href="/cv" 
                    className='px-3 py-2 transition-all border-2 cursor-pointer text-white-500 bg-blue-600 border-blue-500 text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50'>
                    CV
                    </Link>
            </div>
{/* 1.02.57 MIN */}
            </div>
        </div> 
    </div>
    )
}
    export default Introduction;