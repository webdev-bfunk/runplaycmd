import React from 'react'
import Link from 'next/link'
import { FaArrowUp, FaFacebook, FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip'


const socials = [
    {
        icon: <FaGithub />,
        text: "Github",
    },
    {
        icon: <FaInstagram />,
        text: "Instagram",
    },
    {
        icon: <FaLinkedinIn />,
        text: "LinkedIn",
    },
    {
        icon: <FaFacebook />,
        text: "Facebook",
    },
]



const Footer = () => {
    return (
        <>
            <div className='container flex items-center justify-center z-10 relative'>
                <div className="flex items-center justify-between my-8 container">
                    <h2 className='h6 flex flex-col'>
                        <span className='text-gray-400'>Hudsonville, MI</span>
                        <span className='text-gray-400'>WebDev.BFunk@gmail.com</span>
                        <span className='flex text-2xl'>&copy; Run
                            <span className='text-primary-500'>CMD</span>
                            <span className='text-accent'>Create</span></span>
                    </h2>
                    <span className='flex items-center justify-center flex-col text-gray-400'>
                        <Link href="#top" className='flex justify-center flex-col items-center'><FaArrowUp className='text-2xl animate-bounce hover:glowStyles text-center' />Back to top</Link></span>
                    <ul className='flex gap-12 items-center text-xl'>
                        {socials.map((item, index) => (
                            <li key={index}>
                                <TooltipProvider delayDuration={600}>
                                    <Tooltip>
                                        <TooltipTrigger><Link href="/" className='iconStyles hover:glowStyles'>{item.icon}</Link></TooltipTrigger>
                                        <TooltipContent side="center">{item.text}</TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="h-[650px] w-[650px] bg-gradient-to-r from-teal-200 to-teal-500 blur-3xl rounded-full opacity-10 -z-10 absolute bottom-0 right-0" />
            </div >
        </>
    )
}

export default Footer
