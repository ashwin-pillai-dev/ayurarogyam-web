// components/InventoryUpdateFormItems.tsx
'use client';
import { Button, Textarea } from 'flowbite-react';



export default function InventoryUpdateFormItems(props: { inventoryId: string }) {
    console.log('prps:', props)
    return (
        <div className='space-y-4 md:space-y-6'>

            <div>
                <label htmlFor="invoiceNumber" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Invoice Number</label>
                <input type="text" name="invoiceNumber" id="invoiceNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Invoice Number" required={true} />
            </div>

            <div>
                <label htmlFor="supplier" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Supplier</label>
                <input type="text" name="supplier" id="supplier" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Supplier" required={true} />
            </div>

            <div>
                <label htmlFor="qty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                <input type="text" name="qty" id="qty" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quantity" required={true} />
            </div>


            <div>
                <label htmlFor="notes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Notes</label>
                <Textarea id="notes" name="notes" rows={4} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Notes" required={true} />
            </div>



            <div>
                <input type="text" hidden name="inventoryId" id="inventoryId" defaultValue={props.inventoryId} />
            </div>



            <Button
                size="xs"
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700  focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                <p className='text-white font-medium text-sm'>
                    Add Inventory log
                </p>
            </Button>
        </div>
    );
}
