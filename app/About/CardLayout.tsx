import React from 'react';
import Image from 'next/image';

const CardLayout = () => {
    return (
        <div className="xs:flex-col md:flex justify-center">
            {/* Left card */}
            <div className="md:w-1/3 p-4 mt-8">
                <div className="bg-gray-300 shadow  rounded-lg flex flex-col items-center justify-center">
                    <div className="relative w-full h-52 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src="/approach.jpg"
                            alt="Image"
                            fill={true}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <h3 className="text-primary-700 text-xl font-bold">Our Approach</h3>
                    <p className="text-gray-600 text-center text-base px-2 pb-3">
                        At Ayur Arogyam, we believe that every journey begins with a single step, and our journey is no different.
                        Our partnership with "Haridev Formulations," a reputable company based in Kerala, has been a cornerstone of our success.
                        Their dedication to formulating result-oriented products has resonated with our mission to promote genuine well-being.
                    </p>
                </div>
            </div>
            {/* Center card */}
            <div className="md:w-1/3 p-4">
                <div className="bg-gray-300 shadow  rounded-lg flex flex-col items-center justify-center">
                    <div className="relative w-full h-52 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src="/vision.jpg"
                            alt="Image"
                            fill={true}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <h3 className="text-primary-700 text-xl text-center font-bold">Our Vision</h3>
                    <p className="text-gray-600  text-center text-base px-2 pb-3">
                        Our vision is driven by the desire to source and deliver authentic Ayurvedic products from all corners of India.
                        We are dedicated to identifying quality products that are not only efficacious but also aligned with the principles of Ayurveda.
                        We take pride in our unwavering commitment to focusing solely on quality and results-driven offerings.
                    </p>
                </div>
            </div>
            {/* Right card */}
            <div className="md:w-1/3 p-4 mt-8">
                <div className="bg-gray-300 shadow  rounded-lg flex flex-col items-center justify-center">
                    <div className="relative w-full h-52 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src="/philosphy.jpg"
                            alt="Image"
                            fill={true}
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                    <h3 className="text-primary-700  text-center text-xl font-bold">Our Philosophy</h3>
                    <p className="text-gray-600  text-center pb-3">
                        We firmly believe that the true measure of success is the positive impact we make on people's lives.
                        Witnessing individuals benefit from our carefully curated products fills us with a sense of gratification that transcends monetary gains.
                        Our passion lies in facilitating wellness and seeing individuals thrive with the help of Ayurveda.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardLayout;
