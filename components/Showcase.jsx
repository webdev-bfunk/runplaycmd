"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'
import { LiaGithub, LiaToolsSolid } from "react-icons/lia";
import { LuView } from "react-icons/lu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'
import { PiArrowCircleDownRightFill } from "react-icons/pi";
const projects = [
    {
        title: "AI Generator",
        image: "/brainwave2ss.png",
        description: "This project did blah blah blah lah blah so go look at itlah blah so go look at itlah blah so go look at it",
        github: "www.github.com",
        live: "www.google.com",
        stack: [
            { name: 'Next JS' },
            { name: "CSS 3" },
            { name: "Javascript" },
        ],
    },
    {
        title: "Personal Portfolio",
        image: "/rccss5.png",
        description: "This project did blah blah so go look at it please thanks blahlah blah so go look at it",
        github: "www.github.com",
        live: "www.google.com",
        stack: [
            { name: 'React JS' },
            { name: "Tailwind" },
            { name: "PHP" },
        ],
    },
    {
        title: "Personal Blog",
        image: "/genericoss.png",
        description: "This project did blah blah so go look at it please thanks blah",
        github: "www.github.com",
        live: "www.google.com",
        stack: [
            { name: 'React JS' },
            { name: "CSS 3" },
            { name: "Javascript" },
        ],
    },
]

const Showcase = () => {
    return (
        <motion.section
            initial={{ opacity: 0, x: -2000 }}
            animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 1.4, duration: 0.6, ease: "easeInOut" }
            }}>
            <div className='container my-20 z-20'>
                <h2 className='text-6xl font-extralight text-end my-8 headerStyle'>
                    Featured Works
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[120px] place-items-center">
                    {projects.map((item, index) => (
                        <div key={index} className="bg-neutral-800/80 p-8  border-2 border-neutral-900 rounded-xl min-h-[600px] w-[400px] flex flex-col justify-between items-center hover:scale-105 cursor-pointer  hover:shadow-inner shadow-teal-400/20 shadow-2xl hover:shadow-teal-400/80 transition-all duration-500">
                            <h4 className='text-4xl font-extralight '>{item.title}</h4>
                            <Image src={item.image} alt="" width={300} height={400} className='rounded-2xl' />
                            <p className='text-white/60 my-4'>{item.description}</p>
                            <span className='flex items-center justify-end gap-20'>

                                <TooltipProvider delayDuration={600}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Link href={item.github} className='iconStyles hover:glowStyles'>
                                                <LiaGithub size={40} className='hover:text-accent' />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent side="center">Github Repo</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>


                                <TooltipProvider delayDuration={600}>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Link href={item.live} className='iconStyles hover:glowStyles'>
                                                <LuView size={40} className='hover:text-accent' />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent side="center">Live Website</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>

                            </span>
                            <div className="border border-white/20 w-full"></div>
                            <ul className='flex items-center gap-4'>
                                <LiaToolsSolid size={25} />
                                {item.stack.map((stackItem, stackIndex) => (
                                    <li key={stackIndex} className='text-xl text-accent'>
                                        {stackItem.name}
                                        {stackIndex !== item.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="w-full flex h-[100px] justify-end mt-10 ">
                    <Link href="/" className='flex items-center justify-center gap-4 text-xl hover:text-accent'>View more <PiArrowCircleDownRightFill size={50} className='hover:glowStyles' /></Link></div>
            </div>
        </motion.section>
    )
}

export default Showcase
