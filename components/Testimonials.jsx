"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SliderButtons from './SliderButtons';
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';
import { PiNotePencilFill } from "react-icons/pi";

const Testimonials = () => {

    const data =
        [
            {
                "id": 1,
                "title": "Innovative designs!",
                "tagline": "Web design",
                "image": "/image1.jpg",
                "buttons": [
                    {
                        "id": 1,
                        "text": "Roberto Nickson",
                        "link": "https://www.pexels.com/@rpnickson/",
                        "type": "btn-dark btn-circle"
                    }
                ]
            },
            {
                "id": 2,
                "title": "Best customer service!",
                "tagline": "Web Design",
                "image": "/image2.jpg",
                "buttons": [
                    {
                        "id": 1,
                        "text": "Julia M Cameron",
                        "link": "https://www.pexels.com/@julia-m-cameron/",
                        "type": "btn-dark btn-circle"
                    }
                ]
            }
        ]



    return (
        <div className='container z-20 mb-20'>

            <div className='flex items-center mb-20 gap-4'>
                <h2 className='text-6xl font-extralight headerStyle mb-4'>Testimonials</h2>
                <PiNotePencilFill size={70} />
            </div>

            <Swiper
                navigation
                pagination={{ type: "bullets", clickable: true }}
                autoplay={true}
                loop={true}
                modules={[Navigation]}
                className='rounded-xl'
            >
                {data.map(({ id, image, tagline, title, buttons }) => (
                    <SwiperSlide key={id}>
                        <div
                            className="h-full w-full absolute left-0 top-0"
                            style={{
                                background: `url(${image}) center center / cover scroll no-repeat`,
                            }}
                        ></div>
                        <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                        <div className="relative z-10 h-full flex items-center justify-center p-4">
                            <div className="text-center">
                                {tagline && (
                                    <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                                        {tagline}
                                    </p>
                                )}
                                <p className="text-3xl sm:text-4xl lg:text-7xl font-bold text-white">
                                    {title}
                                </p>
                                {buttons.length > 0 ? (
                                    <p className=" bg-teal-800 hover:bg-accent-hover inline-block px-9 py-2 rounded-full text-white mt-10 lg:mt-20">
                                        <SliderButtons buttons={buttons} />
                                    </p>
                                ) : null}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>


        </div>
    )
}

export default Testimonials
