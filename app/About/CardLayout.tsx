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
                            src="/expertise.jpg"
                            alt="Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h3 className="text-primary-700 text-xl font-bold">Expertise and Guidance</h3>
                    <p className="text-gray-600 text-center text-base px-2 pb-3">
                        Our team in Kerala consists of Ayurvedic experts and professionals
                        who are passionate about Ayurveda and its transformative potential.
                        We are dedicated to providing you with accurate information, expert guidance,
                        and personalized recommendations. We believe that education is essential,
                        and we strive to empower our customers with the knowledge
                        to make informed decisions about their health and well-being.
                    </p>
                </div>
            </div>
            {/* Center card */}
            <div className="md:w-1/3 p-4">
                <div className="bg-gray-300 shadow  rounded-lg flex flex-col items-center justify-center">
                    <div className="relative w-full h-52 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src="/wide-range.jpg"
                            alt="Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h3 className="text-primary-700 text-xl text-center font-bold">Wide Range of Ayurvedic Products</h3>
                    <p className="text-gray-600  text-center text-base px-2 pb-3">
                        We offer a diverse range of Ayurvedic products to address various health concerns.
                        From wellness supplements and herbal remedies to skincare and beauty products, our inventory is
                        carefully curated to cater to your specific needs. Each product is chosen with utmost care to ensure
                        its quality, efficacy, and adherence to Ayurvedic principles. Out of these wide range of products Ayur Arogyam is
                        promoting OJUSET : A wellness product and KUROL : A remedy for piles in Thane and Mumbai region.
                    </p>
                </div>
            </div>
            {/* Right card */}
            <div className="md:w-1/3 p-4 mt-8">
                <div className="bg-gray-300 shadow  rounded-lg flex flex-col items-center justify-center">
                    <div className="relative w-full h-52 mb-4 rounded-lg overflow-hidden">
                        <Image
                            src="/customer-satisfaction.jpg"
                            alt="Image"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <h3 className="text-primary-700  text-center text-xl font-bold">Customer Satisfaction</h3>
                    <p className="text-gray-600  text-center pb-3">
                        Your satisfaction is our top priority. We are committed to providing exceptional
                        customer service and ensuring that your experience with us is seamless andenjoyable.
                        We value your feedback and are always striving to improve and exceed your
                        expectations.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CardLayout;
