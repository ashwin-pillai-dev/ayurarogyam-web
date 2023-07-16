import DefaultNavbar from "../components/DefaultNavbar"
import DefaultFooter from "../components/footer"
import Image from "next/image"

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
                                At Ayur Arogyam, we are dedicated to promoting holistic well-being through the
                                power of Ayurveda. We believe that nature has provided us with everything we need
                                to achieve optimal health and vitality, and our mission is to harness the wisdom of
                                Ayurveda to help individuals lead healthier and happier lives.
                            </p>



                            {/* <Image height={500} width={500} src="/ojuset new.JPG" className='w-full' alt="mockup" /> */}
                        </div>

                    </div>
                    <Image height={500} width={500} className="w-full h-100 rounded-lg" src="/ayurveda-doctors.jpg" alt="Ayurveda doctors" />

                </section>
                <section className="bg-white dark:bg-gray-900">

                    <div className="py-8  flex justify-center    mx-auto  lg:py-16">
                        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400 ">
                            <h2 className="mb-4 text-2xl tracking-tight font-bold text-primary-700 dark:text-white text-center">Our Commitment to Ayurveda</h2>
                            <p className="mb-4 font-medium text-center">
                                Ayurveda, the ancient Indian system of medicine, offers a holistic approach to health
                                and wellness. It emphasizes the balance of mind, body, and spirit to achieve overall
                                well-being. At Ayur Arogyam, we deeply respect and honour the principles of
                                Ayurveda, and our products are carefully crafted to embody its essence.
                            </p>
                            <h2 className="mb-4 text-2xl tracking-tight font-bold text-primary-700 dark:text-white">Quality and Authenticity</h2>
                            <p className="mb-4 font-medium">
                                We understand the importance of quality when it comes to Ayurveda products. That&#39;s
                                why we have partnered with a renowned Kerala based Ayurveda company
                                “HARIDEV FORMULATIONS” to bring you the highest quality products. All our
                                offerings are meticulously formulated using traditional herbs, natural ingredients, and
                                time-tested techniques, ensuring their authenticity and effectiveness.
                            </p>

                            <h2 className="mb-4 text-2xl tracking-tight font-bold text-primary-700 dark:text-white">Expertise and Guidance</h2>
                            <p className="mb-4 font-medium">
                                Our team in Kerala consists of Ayurvedic experts and professionals who are
                                passionate about Ayurveda and its transformative potential. We are dedicated to
                                providing you with accurate information, expert guidance, and personalized
                                recommendations. We believe that education is essential, and we strive to empower
                                our customers with the knowledge to make informed decisions about their health and
                                well-being.
                            </p>

                            <h2 className="mb-4 text-2xl tracking-tight font-bold text-primary-700 dark:text-white">Wide Range of Ayurvedic Products</h2>
                            <p className="mb-4 font-medium">
                                We offer a diverse range of Ayurvedic products to address various health concerns.
                                From wellness supplements and herbal remedies to skincare and beauty products,
                                our inventory is carefully curated to cater to your specific needs. Each product is
                                chosen with utmost care to ensure its quality, efficacy, and adherence to Ayurvedic
                                principles. Out of these wide range of products Ayur Arogyam is promoting
                                OJUSET : A wellness product and KUROL : A remedy for piles in Thane and
                                Mumbai region.
                            </p>

                            <h2 className="mb-4 text-2xl tracking-tight font-bold text-primary-700 dark:text-white">Customer Satisfaction</h2>
                            <p className="mb-4 font-medium">
                                Your satisfaction is our top priority. We are committed to providing exceptional
                                customer service and ensuring that your experience with us is seamless andenjoyable. We value your feedback and are always striving to improve and exceed
                                your expectations.
                            </p>

                            <h2 className="mb-4 text-2xl tracking-tight font-bold text-primary-700 dark:text-white">Join Us on the Ayurvedic Journey</h2>
                            <p className="mb-4 font-medium">
                                Embark on a journey towards holistic well-being with Ayur Arogyam. Explore the
                                wonders of Ayurveda and experience the transformative power of nature. Rediscover
                                balance, vitality, and harmony in your life.
                            </p>

                        </div>
                    </div>
                </section>

            </div >
            <DefaultFooter />

        </div >

    )
}