import Link from 'next/link';
import { TfiCamera, TfiPalette, TfiStatsUp, TfiWorld } from "react-icons/tfi";
const services = [
    {
        name: 'Web Development',
        icon: <TfiWorld />,
        price: '$150',
        stack: [
            { name: 'Full custom website' },
            { name: "1 year of Free Troubleshooting" },
            { name: "Domain" },
        ],
    },
    {
        name: 'Branding/Logos',
        icon: <TfiPalette />,
        price: '$120',
        stack: [
            { name: 'Complete new logo' },
            { name: "Several options to choose from" },
            { name: "Unlimited downloads of your files" },
        ],
    },
    {
        name: 'SEO',
        icon: <TfiStatsUp />,
        price: '$50',
        stack: [
            { name: 'Get your website traffic' },
            { name: "Guranteed results" },
            { name: "Continued support for up to 1 year" },
        ],
    },
    {
        name: 'Photography',
        icon: <TfiCamera />,
        price: '$90',
        stack: [
            { name: '1 hour session' },
            { name: "All proofs" },
            { name: "Unlimited downloads of files" },
        ],
    },

]

const Services = () => {
    return (
        <div className='container'>
            <div className=" mb-20 rounded-xl p-8 ">
                <h2 className='text-6xl font-extralight text-center my-8 headerStyle'>
                    Services
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 my-20 place-items-center">
                    {services.map((item, index) => (
                        <>
                            <div className='p-8 bg-neutral-800/60 rounded-xl min-w-[550px]  border-2 border-neutral-900 hover:scale-105 cursor-pointer  hover:shadow-inner shadow-teal-400/20 shadow-2xl hover:shadow-teal-400/80 transition-all duration-500'>
                                <li className="list-none flex items-center justify-center " key={index}>
                                    <h2 className='text-4xl flex gap-4 mb-4'>{item.icon} {item.name}</h2>
                                </li>
                                <h3 className='text-neutral-400'>What&apos;s included:</h3>
                                <span className='flex flex-col gap-4 mt-2'> {item.stack.map((stackItem, stackIndex) => (
                                    <li key={stackIndex} className='text-xl text-accent'>
                                        {stackItem.name}

                                    </li>
                                ))}</span>

                                <span className=' text-neutral-200 flex justify-between items-center mt-8'>
                                    <Link href="/" className='px-3 py-1 bg-neutral-700 rounded-lg border-2 border-neutral-900 hover:scale-105 hover:shadow-inner shadow-teal-400/20 shadow-2xl hover:shadow-teal-400/80 transition-all duration-500'>Learn More</Link>
                                    <p className='text-6xl font-extralight'>{item.price}</p></span>
                            </div>
                        </>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Services
