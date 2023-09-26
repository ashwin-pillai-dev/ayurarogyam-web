import DefaultNavbar from "../../components/DefaultNavbar";
import DefaultFooter from "../../components/footer";
import Image from "next/image";
import BenefitCard from "./components/BenefitCard";


export default function page() {
    const BENEFITS = [
        {
            image: '/muscle-fitness.png',
            title: 'Lifesyle & Fitness',
            link: '/Products/Ojuset/benefits/1'
        },

        {
            image: '/sexual.png',
            title: 'Sexual Wellness',
            link: '/Products/Ojuset/benefits/2'
        },

        {
            image: '/old-man.png',
            title: 'For Geriatrics - Care for the unique health needs of the elderly',
            link: '/Products/Ojuset/benefits/3'
        },
        {
            image: '/weakened.png',
            title: 'Ojuset: Your Ageless Wellness Companion',
            link: '/Products/Ojuset/benefits/4'
        },
    ]
    return (
        <div>
            <DefaultNavbar />
            <div className="container mx-auto">

                <section className="dark:bg-gray-900 mt-10">


                    <div>
                        {/* Sex booster */}

                        <div className="md:grid md:grid-cols-2 justify-between">


                            <div className="md:order-1 p-4 ">
                                <h2 className="text-4xl  text-gray-600 pb-4">OJUSET CAPSULE</h2>


                                <div className=" flex flex-col h-full justify-around">

                                    <div className="">
                                        <h1 className="text-4xl font-bold mb-4 font-serif text-primary-700">Welcome to Ojuset Capsule: Your Path to Total Wellness</h1>

                                        <p className="text-primary-600 mb-6">
                                        At Ayur Arogyam, we believe that wellness is not just an absence of illness, but a state of vitality and balance that allows you to live life to the fullest. With this philosophy at heart, we introduce you to Ojuset Capsule, a total wellness product that encompasses the essence of health, vitality, and rejuvenation.                                        </p>
                                        {/* <p className="text-primary-600">
                                            Our line of Ayurvedic products for sexual enhancement is formulated to address these concerns naturally.
                                            Using traditional herbs and ingredients known for their aphrodisiac properties, our products can help improve stamina, vitality, and overall sexual performance.
                                            Rediscover the joy of intimate moments with our safe and effective solutions.
                                        </p> */}

                                    </div>

                                    <div className="lg:mb-16">
                                        <h2 className="mb-4 text-4xl font-bold mb-4 font-serif text-primary-700 dark:text-white">Boosting Stamina, Elevating Energy:</h2>
                                        <p className="text-primary-600">
                                        Ojuset Capsule is your steadfast companion in the quest for boundless energy and unwavering stamina. Whether you're striving for peak performance at the gym, seeking to regain your vitality with age, or simply looking to infuse your days with vigor, Ojuset Capsule is here to empower you.
                                        </p>
                                    </div>

                                </div>

                            </div>

                            <div className="md:order-2  flex justify-center p-5 md:p-0  justify-self-center self-center">
                                <Image
                                    src="/ojuset-vitality.jpg"
                                    alt="Kurol Tablet"
                                    width={400}
                                    height={300}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>

                        <section className="bg-white dark:bg-gray-900">
                            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">

                                <div className="w-full  flex  justify-center">
                                    <h2 className="text-4xl self-center   font-bold mb-4 font-serif text-primary-700 dark:text-white">Benefits of Ojuset</h2>

                                </div>


                                <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
                                    {
                                        BENEFITS.map((benefit, index) => {
                                            return <BenefitCard title={benefit.title} image={benefit.image} link={benefit.link} key={index} />
                                        })
                                    }
                                    {/* <div>
                                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        </div>
                                        <h3 className="mb-2 text-xl text-primary-700 font-bold dark:text-white">Improve Stamina and Vitality</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Ojuset is formulated to help you regain your youthful energy and vitality. By stimulating blood flow
                                            and promoting hormonal balance, our unique blend of ingredients can support increased stamina and
                                            endurance.
                                            Experience longer-lasting intimate moments and elevate your overall sexual performance.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold text-primary-700 dark:text-white">Enhance Sensitivity and Pleasure</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Ojuset works holistically to enhance your sensual experience.
                                            It heightens sensitivity, intensifies pleasure, and promotes a deeper connection with your partner.
                                            Our natural ingredients help create a harmonious balance between mind and body, paving the way for
                                            enhanced pleasure and intimate satisfaction.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                            <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                        </div>
                                        <h3 className="mb-2 text-xl font-bold dark:text-white text-primary-700 ">Safe and Effective</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            At Ayur-Arogyam, your well-being is our top priority. Ojuset is crafted using the finest quality
                                            herbs and ingredients, carefully sourced and manufactured under strict quality control standards.
                                            Our product is free from harmful chemicals, additives, and artificial substances, ensuring a safe
                                            and effective solution for your sexual enhancement needs.

                                        </p>
                                    </div> */
                                    }

                                </div>
                            </div>
                        </section>
                    </div>



                </section>

            </div>
            <DefaultFooter />

        </div>
    )
}