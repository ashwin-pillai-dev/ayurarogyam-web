'use client'
import { Button, Label, Select } from 'flowbite-react';

type PropType = {
    productId: string;
    clientTypes:any[]

}

const FormItems: React.FC<PropType> = ({ productId,clientTypes}) => {



    return (
        <div className='space-y-4 md:space-y-6'>
            <div>
                <input type="text" hidden name="productId" id="productId" defaultValue={productId} />
            </div>
            <div
                className="max-w-md"
                id="select"
            >
                <div >
                    <Label
                        htmlFor="clientType"
                        value="Select Client Type"
                    />
                </div>
                <Select
                    id="clientType"
                    name='clientType'
                    required
                >
                    {
                        clientTypes.map((clientType) => {
                            return (
                                <option key={clientType.id} value={clientType.id}>
                                    {clientType.name}
                                </option>
                            );

                        })
                    }
                </Select>
            </div>
            <div>
                <label htmlFor="startingQtyLimit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Quantity Limit</label>
                <input type="number" name="startingQtyLimit" id="startingQtyLimit" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter quantity limit" required={true} />
            </div>

            <div>
                <label htmlFor="endingQtyLimit" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ending Quantity Limit</label>
                <input type="number" name="endingQtyLimit" id="endingQtyLimit" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter quantity limit" required={true} />
            </div>

            
            <div>
                <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount</label>
                <input type="number" name="amount" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter quantity limit" required={true} />
            </div>


            <Button
                size="xs"
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700  focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                <p className='text-white font-medium  text-sm'>
                    Add Price to product
                </p>
            </Button>
        </div>
    )

}

export default FormItems;