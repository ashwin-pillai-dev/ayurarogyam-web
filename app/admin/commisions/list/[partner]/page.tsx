import moment from "moment";
import { getCommissions } from "../../services";
import SearchAbleSelect from "@/app/admin/components/SearchAbleSelect/SearchAbleSelect";
import PaidSelect from "../../components/PaidSelect";
import Link from "next/link";



export default async function Page({
    params,
}: {
    params: { partner: string }
}) {

    const partnerId = params.partner
    const commissions = await getCommissions(partnerId)



    return (
        <section className="bg-gray-50 dark:bg-gray-900 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                {/* <!-- Start coding here --> */}
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                        <div className="w-full md:w-1/2">
                            <form className="flex items-center">
                                <label htmlFor="simple-search" className="sr-only">Search</label>
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-4 py-3">Date</th>
                                    <th scope="col" className="px-4 py-3">Amount</th>
                                    <th scope="col" className="px-4 py-3">Invoice</th>
                                    <th scope="col" className="px-4 py-3">Status</th>
                                    {/* <th scope="col" className="px-4 py-3">
                                        <span className="sr-only">Actions</span>
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    commissions.map((commission: any) => {
                                        return (
                                            <tr className="border-b dark:border-gray-700" key={commission.id}>


                                                {/* <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                                <span className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                {commission.date}
                                                </span>
                                                    </th> */}

                                                <td className="px-4 py-3">{moment(commission.dateOfPayment).format('DD-MM-YYYY').toString()}</td>
                                                <td className="px-4 py-3">{commission.amount}</td>
                                                <td className="px-4 py-3"><Link href={`/admin/invoice/${commission.sales.invoice.id}`}>{commission.sales.invoice.invoiceNumber}</Link></td>
                                                {/* <td className={`px-4 py-3 ${commission.paid ? 'text-green-500' : 'text-yellow-500'}`}>
                                                    {commission.paid ? 'Paid' : 'Pending'}
                                                </td> */}
                                                <td  className="px-4 py-3">
                                                    <PaidSelect paid={commission.paid ? { label: 'Paid', value: true } : { label: 'Pending', value: false }} commissionId={commission.id} partnerId={commission.partnerId} />

                                                </td>

                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </section>
    )

}
