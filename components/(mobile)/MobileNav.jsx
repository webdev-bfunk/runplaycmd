import React from 'react'

const MobileNav = () => {
    return (
        <div>
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
    )
}

export default MobileNav
