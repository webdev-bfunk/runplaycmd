"use client"
import { motion } from 'framer-motion'
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <motion.section
            initial={{ opacity: 0, x: 2000 }}
            animate={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 0.6, ease: "easeInOut" }
            }}
        >
            <div className='container' id='top'>
                <div className="flex justify-between my-8">
                    <h2 className='h2 from-white via-teal-300 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent font-light tracking-tighter'>RunCMDCreate
                        <span className='from-white via-teal-300 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent'></span>
                        <span className='from-white via-teal-300 to-teal-600 bg-gradient-to-r bg-clip-text text-transparent'></span>
                    </h2>
                    <ul className='gap-10 items-center text-xl hidden md:flex'>
                        <li>
                            <Link href="/" className='textHoverStyle'>Profile</Link>
                        </li>
                        <li>
                            <Link href="/" className='textHoverStyle'>Services</Link>
                        </li>
                        <li>
                            <Link href="/" className='textHoverStyle'>Portfolio</Link>
                        </li>
                        <li>
                            <Link href="/" className='textHoverStyle'>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.section>
    )
}

export default Navbar
