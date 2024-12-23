import { Product } from "@prisma/client";
import { getPrices, getProductById } from "../../services";
import { Filter } from "@/utils/queryHelper/queryHelper.types";



export default async function Page({
    params,
}: {
    params: { product: string }
}) {

    const productId = params.product
    const prices = await getPrices(productId)
    const filters: Filter[] = [{ field: 'id', cond: 'equals', value: productId }]
    const response = await getProductById({ query: null, page: '1', limit: '10', filters })
    const product = response[0];
    console.log('product: ', product);
    console.log('category: ', product.category);
    return (
        <section className="bg-gray-50 dark:bg-gray-900 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">


                {/* <!-- Start coding here --> */}
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="w-full p-2 ">

                        <h2 className="text-xl font-bold text-bg-primary-700  dark:text-white">
                            {`${product.name} - `}
                            <span className="text-gray-500">{product.category?.name}</span>
                        </h2>
                        {/* Add more product details here */}
                    </div>
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
                        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            <a href={`/admin/prices/add/${productId}`} className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                Add Prices
                            </a>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-4 py-3">Name</th>

                                    <th scope="col" className="px-4 py-3">Start Limit</th>
                                    <th scope="col" className="px-4 py-3">End limit</th>
                                    <th scope="col" className="px-4 py-3">Amount</th>
                                    <th scope="col" className="px-4 py-3">
                                        <span >Actions</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    prices.map((price: any) => {
                                        return (
                                            <tr className="border-b dark:border-gray-700" key={price.id}>


                                                <th scope="row" className="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white">

                                                    <span className="font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        {price.clientType.name}
                                                    </span>
                                                </th>
                                                <td className="px-4 py-3">{price.startingQtyLimit}</td>
                                                <td className="px-4 py-3">{price.endingQtyLimit}</td>
                                                <td className="px-4 py-3">{price.amount}</td>
                                                <td className="px-4 py-3">
                                                    <a href={`/admin/prices/edit/${price.id}`} className="text-blue-400 cursor-pointer text-underline">
                                                        Edit
                                                    </a>
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
