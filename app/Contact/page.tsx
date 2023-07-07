import DefaultNavbar from "../components/DefaultNavbar";
import DefaultFooter from "../components/footer";
import Map from '../components/Map';


export default function page() {
    return (
        <div>
            <DefaultNavbar />
            <div className="container mx-auto ">
                <section className="bg-white dark:bg-gray-900">
                    <h1 className="text-primary-700 text-4xl font-bold text-center">Contact Us</h1>
                    <p className="text-primary-600 font-bold text-2xl mt-5 mb-5 text-center" >Feel free to reach out to us with any questions or inquiries.</p>
                    <div className="w-full px-10">
                        <Map />
                    </div>
                    <div className='text-center mt-10 flex  flex-wrap justify-center'>
                        <div className="mb-5 mx-4 ">
                            <h2 className="text-primary-700 font-bold mb-2">Suppport</h2>
                            <p className="text-primary">Email: anil.pillai@haridevformulations.com</p>
                        </div>

                        <div className="mb-5 mx-4  md:w-auto ">
                            <h2 className="text-primary-700 font-bold mb-2">Sales</h2>
                            <p className="text-primary md:w-82 break-words">
                                Address: Unit No. 33, Second floor, GNP Galaxy Industrial Estate, Ambernath -421505
                            </p>
                        </div>

                        <div className="mx-4 ">
                            <h2 className="text-primary-700 font-bold mb-2">Phone</h2>
                            <p className="text-primary">Anil Pillai</p>
                            <p className="text-primary">Phone: +91 8087979983</p>
                        </div>
                    </div>
                </section>

            </div>
            <DefaultFooter />

        </div>
    )
}