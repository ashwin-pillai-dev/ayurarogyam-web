import DefaultNavbar from "../components/DefaultNavbar"
import DefaultFooter from "../components/footer"
import Image from "next/image"
import CardLayout from "./CardLayout"

export default function page() {
    return (
        <div>
            <DefaultNavbar />
            <div className="container mx-auto">
                <section className="bg-white dark:bg-gray-900">
                    <div className="grid px-4 py-8 mx-auto lg:gap-5 xl:gap-0 lg:pt-5 lg:grid-cols-12 flex-wrap">
                        <div className="mr-auto place-self-center lg:col-span-6">
                            <h1 className="max-w-2xl text-primary-700 mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Welcome to AyurArogyam</h1>
                        </div>
                        <div className="lg:mt-0 lg:col-span-6 lg:flex-col">
                            <p className="text-primary-700 font-bold mb-5 text-xl">About us</p>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                                Welcome to Ayur Arogyam, where the essence of life and overall well-being converge to bring you the wisdom of Ayurveda.
                                As our name suggests, "Ayur" signifies life, "Arogyam" signifies overall well-being, and "Ayurveda" stands for the knowledge of life.
                                At Ayur Arogyam, we are committed to embracing the profound wisdom of Ayurveda and delivering it to your doorstep.
                            </p>



                        </div>

                    </div>
                    <Image height={500} width={500} className="w-full h-100 rounded-lg" src="/ayurveda-doctors.jpg" alt="Ayurveda doctors" />

                </section>
                <section className="bg-white dark:bg-gray-900">

                    <div className="py-8  flex justify-center  lg:py-16">
                        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400 ">
                            <h2 className="mb-4 text-2xl tracking-tight font-bold text-primary-700 dark:text-white text-center">Our Journey</h2>
                            <p className="mb-4 font-medium text-center">
                                Our journey began in the heart of 2023 with a simple vision - to bring the ancient science of Ayurveda closer to modern lives.
                                Starting with a handful of quality products, we embarked on a mission to share the therapeutic benefits of Ayurveda with the community.
                                In just under two months, we have made significant strides, reaching out to numerous doctors and pharmacies across Thane, Mumbai, and Navi Mumbai regions.
                            </p>

                            {/* <div className="grid md:grid-cols-2 gap-4 items-center mt-5">
                                <div>
                                    <Image height={50} width={500} className="w-full rounded-lg mb-5 px-5" src="/quality-and-authenticity.avif" alt="Ayurveda doctors" />

                                </div>
                                <div className="px-5 ">
                                    <h2 className="mb-4 text-2xl tracking-tight font-bold text-center text-primary-700 dark:text-white">Quality and Authenticity</h2>
                                    <p className="mb-4  font-medium">
                                        We understand the importance of quality when it comes to Ayurveda products. That&#39;s
                                        why we have partnered with a renowned Kerala based Ayurveda company
                                        “HARIDEV FORMULATIONS” to bring you the highest quality products. All our
                                        offerings are meticulously formulated using traditional herbs, natural ingredients, and
                                        time-tested techniques, ensuring their authenticity and effectiveness.
                                    </p>
                                </div>
                            </div> */}

                            <div className="w-full">
                                <CardLayout />
                            </div>
                            <h2 className="mb-4 text-2xl tracking-tight font-bold text-primary-700 dark:text-white">Join Us on the Ayurvedic Journey</h2>
                            <p className="mb-4 font-medium">
                            At Ayur Arogyam, we are not just distributing Ayurvedic medicine; we are sharing a centuries-old legacy of well-being.
                             Our dedication to providing quality, trusted, and effective products is an embodiment of our commitment to your health and happiness. 
                            As we continue to grow and expand our reach, we invite you to join us on this journey of embracing Ayurveda and nurturing a holistic sense of vitality.
                            </p>

                        </div>
                    </div>
                </section>

            </div >
            <DefaultFooter />

        </div >

    )
}