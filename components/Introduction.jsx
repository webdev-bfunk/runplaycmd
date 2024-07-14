"use client"
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
const Introduction = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }} className='mb-20'>
            <div className='container '>
                <h2 className='text-6xl font-extralight  my-8 from-white via-teal-500 to-teal-900 bg-gradient-to-r bg-clip-text text-transparent'>
                    Brandon Funk
                </h2>
                <div className='w-80 h-80 relative float-end '>
                    <Image
                        src="/me12.jpg"
                        alt='Brandon Funk'
                        fill
                        className='rounded-full object-cover'
                    />
                </div>
                <p className='mb-8 text-white/60 w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis iusto dignissimos possimus quibusdam totam, necessitatibus soluta saepe libero voluptate corporis incidunt, dolor temporibus eius tenetur beatae cumque a maLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis iusto dignissimos possimus quibusdam totam, necessitatibus soluta saepe libero voluptate corporis incidunt, dolor temporibus eius tenetur beatae cumque a maLorem ipsum dolor sit amet consectetur adipisicing elit. Commodi debitis iusto dignissimos possimus quibusdam totam, necessitatibus soluta saepe libero voluptate corporis incidunt, dolor temporibus eius tenetur beatae cumque a magni.</p>
                <Link href="/" className='px-3 py-1 bg-neutral-700 flex  justify-center gap-2 items-center w-[150px] rounded-lg border-2 border-neutral-900 hover:scale-105 mt-12 hover:shadow-inner shadow-teal-400/20 shadow-2xl hover:shadow-teal-400/80 transition-all duration-500'>
                    Full Profile <LiaLongArrowAltRightSolid size={30} />
                </Link>
            </div>
        </motion.section>
    )
}

export default Introduction
