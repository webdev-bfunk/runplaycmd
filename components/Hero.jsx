"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }} className='mb-20'>
            <div className='container'>
                <h2 className='h2 text-center my-8 from-white via-teal-500 to-teal-900 bg-gradient-to-r bg-clip-text text-transparent'></h2>
                <div className="w-full flex justify-center">
                    <Image src="/network.jpg" alt="" width={800} height={200} className='rounded-3xl z-10 relative shadow-2xl shadow-teal-300/20 opacity-80' />
                </div>
                <div className="h-[650px] w-[650px] bg-gradient-to-r from-teal-200 to-teal-500 blur-3xl rounded-full opacity-10 absolute top-10 left-80" />

            </div>
        </motion.section>
    )
}

export default Hero
