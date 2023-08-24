"use client"
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import Image from 'next/image';

const Slider = ({ slides }) => {

    return (
        <div>
            <Slide easing="ease">
                {slides.map((slide, index) => (
                    // <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-10 md:mx-20 h-96 relative">
                    //     <div className="h-full max-w-screen-xl px-4 mx-auto ">
                    //         <div className="max-w-screen-xl text-center">
                    //             <h1 className="text-primary-700 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                    //                 {slide.title}
                    //             </h1>
                    //             {/* Render slide description here if needed */}
                    //         </div>
                    //     </div>
                    //     <div className="h-full max-w-screen-xl">
                    //         <Image
                    //             src={slide.image}
                    //             alt="Slide Image"
                    //             fill={true}
                    //             style={{ objectFit: "contain" }}
                    //             className="rounded-lg"
                    //         />
                    //     </div>
                    // </div>
                    <div key={index} className='grid grid-cols-4 gap-4 justify-between bg-black'>
                        {/* col 1 */}
                        <div className="h-full max-w-screen-xl px-4 mx-auto ">
                            <div className="max-w-screen-xl text-center">
                                <h1 className="text-primary-700 text-4xl font-extrabold tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                                    {slide.title}
                                </h1>
                                {/* Render slide description here if needed */}
                            </div>
                        </div>

                        {/* col 2 */}
                        <div className="h-full max-w-screen-xl">
                            <Image
                                src={slide.image}
                                alt="Slide Image"
                                fill={true}
                                style={{ objectFit: "contain" }}
                                className="rounded-lg"
                            />
                        </div>

                    </div>

                ))}
            </Slide>
            {/* <Slide easing="ease">
                {slides.map((slide, index) => (
                    <div key={index} className="each-slide rounded-md mx-10 md:mx-20 justify-self-center bg-fixed bg-cover h-96" style={{backgroundImage:  `url("${slide.image}")`}}>
                            <div className="flex h-full max-w-screen-xl px-4 py-8 mx-auto justify-center items-center" >
                                <div className="max-w-screen-xl">
                                    <h1 className="text-white mb-4 text-4xl font-extrabold tracking-tight  md:text-5xl xl:text-6xl dark:text-white">{slide.title}</h1>
                                </div>

                            </div>
                    </div>
                ))}
            </Slide> */}
        </div>
    );
};

export default Slider;
