import { getSales } from "../services";
import Pagination from "../../components/pagination/Pagination";
import { getClients } from "../../clients/services";
import { getAgents } from "../../partners/services";
import FilterSearch from "../../components/FilterSearch/FilterSearch";
import { Filter } from "@/utils/queryHelper/queryHelper.types";
import { Client, Partner } from "@prisma/client";
import Link from "next/link";

type VistType = {
    name: string,
    id: string
}




export default async function page({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {

    const page =
        typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
    const limit =
        typeof searchParams.limit === 'string' ? Number(searchParams.limit) : 10
    const client: string =
        typeof searchParams.client === 'string' ? searchParams.client.toString() : ''
    const partner: string =
        typeof searchParams.partner === 'string' ? searchParams.partner.toString() : ''
    const type: string =
        typeof searchParams.type === 'string' ? searchParams.type.toString() : ''

    let routeUrl = '/admin/sales/list';
    const filters: Filter[] = []

    let clientValue: Client | null = null;
    let partnerValue: Partner | null = null;
    let typeValue: VistType | null | undefined = null;


    const clientsData = getClients()
    const partnersData = getAgents()
    const visitTypes: VistType[] = [
        { name: 'Sale', id: '0' },
        { name: 'follow-up', id: '1' },
    ]
    const [clients, partners] = await Promise.all([clientsData, partnersData])


    if (client || partner || type) {
        routeUrl += '?';
        if (client.length > 0) {
            filters.push({ field: 'invoice.clientId', cond: 'equals', value: client })
            routeUrl += `client=${client}`;
            clientValue = clients.find((clnt: Client) => {
                return clnt.id == client

            })

        }
        if (partner) {
            console.log(client.length);

            if (client.length > 0) {
                routeUrl += '&';
            }
            filters.push({ field: 'partnerId', cond: 'equals', value: partner })
            routeUrl += `partner=${partner}`;
            partnerValue = partners.find((prtnr: Partner) => {
                return prtnr.id == partner

            })
        }
        if (type != '') {
            if (client.length > 0 || partner.length > 0) {
                routeUrl += '&';
            }
            filters.push({ field: 'visitType', cond: 'equals', value: type })
            routeUrl += `type=${type}`;

            typeValue = visitTypes.find((visit) => visit.id == type)
        }
    }


    const response: any = await getSales({ filter: filters, page: page.toString(), limit: limit.toString() })
    console.log('sales response');
    console.log(response);
    

    const sales: any = response.data
    const { total } = response

    return (
        <section className="bg-gray-50 dark:bg-gray-900 sm:p-5">
            <div className="mx-auto max-w-screen-xl px-4 lg:px-12">
                {/* <!-- Start coding here --> */}
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row justify-between items-center p-4 space-y-3 md:space-y-0 md:space-x-4">

                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center">
                            <FilterSearch placeholder="Select Client" name="client" value={clientValue} routeUrl={routeUrl} options={clients}></FilterSearch>
                        </div>

                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center">
                            <FilterSearch placeholder="Select Partner" name="partner" value={partnerValue} routeUrl={routeUrl} options={partners}></FilterSearch>
                        </div>

                        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 items-center">
                            <FilterSearch placeholder="Select type" name="type" value={typeValue} routeUrl={routeUrl} options={visitTypes}></FilterSearch>
                        </div>

                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                            {/* Rest of your code remains unchanged */}
                        </div>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">

                            <a href="/admin/sales/add" className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                                <svg className="h-3.5 w-3.5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path clipRule="evenodd" fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                                </svg>
                                New Sale
                            </a>

                            <div className="flex items-center space-x-3 w-full md:w-auto">
                                <button id="actionsDropdownButton" data-dropdown-toggle="actionsDropdown" className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" type="button">
                                    <svg className="-ml-1 mr-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                                    </svg>
                                    Actions
                                </button>

                                <div id="actionsDropdown" className="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="actionsDropdownButton">
                                        <li>
                                            <a href="#" className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Mass Edit</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete all</a>
                                    </div>
                                </div>

                                <div id="filterDropdown" className="z-10 hidden w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700">
                                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Choose brand</h6>
                                    <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                                        <li className="flex items-center">
                                            <input id="apple" type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                                            <label htmlFor="apple" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">Apple (56)</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-4 py-3">Client</th>
                                    <th scope="col" className="px-4 py-3">Partner</th>
                                    <th scope="col" className="px-4 py-3">Sale/Follow Up</th>
                                    <th scope="col" className="px-4 py-3">Total amount</th>
                                    <th scope="col" className="px-4 py-3">Invoice</th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sales.map((sale: any) => {
                                        return (
                                            <tr className="border-b dark:border-gray-700" key={sale.id}>
                                                <td className="px-4 py-3"> {sale.invoice.client.name}</td>
                                                <td className="px-4 py-3"> {sale.partner.name}</td>
                                                <td className="px-4 py-3"> {sale.visitType == 0 ? 'sale' : 'follow-up'}</td>
                                                <td className="px-4 py-3"> {sale.visitType == 0 ? sale.invoice.total : 'N/A'}</td>
                                               
                                                <td className="px-4 py-3"><Link href={`/admin/invoice/${sale.invoice.id}`}>{sale.invoice.invoiceNumber}</Link></td>
 {/* <td className="px-4 py-3"> {sale.invoice.invoiceNumber}</td> */}

                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>{
                        sales?.length > 0 ?
                            <Pagination limit={limit} page={page} total={total} route={routeUrl} />
                            : null

                    }
                </div>
            </div>
        </section>
    )

}
