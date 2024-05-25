'use client'
import { Button, FileInput, Label, Select } from 'flowbite-react';
import { Product, InventoryType } from '@prisma/client'

type PropType = {
    products: Product[];
    inventoryTypes: InventoryType[];

}

export default function FormItems(props: PropType) {
    const { products, inventoryTypes } = props

    return (
        <div className='space-y-4 md:space-y-6'>
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required={true} />
            </div>

            <div
                className="max-w-md"
                id="select"
            >
                <div >
                    <Label
                        htmlFor="productId"
                        value="Select Product"
                    />
                </div>
                <Select
                    id="productId"
                    name='productId'
                >
                    {
                        products.map((product: Product) => {
                            return (
                                <option key={product.id} value={product.id}>
                                    {product.name}
                                </option>
                            );

                        })
                    }
                </Select>
            </div>

            <div
                className="max-w-md"
                id="select"
            >
                <div >
                    <Label
                        htmlFor="inventoryTypeId"
                        value="Select the type of inventory"
                    />
                </div>
                <Select
                    id="inventoryTypeId"
                    name='inventoryTypeId'
                    required={true}
                >
                    {
                        inventoryTypes.map((inventoryType: InventoryType) => {
                            return (
                                <option key={inventoryType.id} value={inventoryType.id}>
                                    {inventoryType.name}
                                </option>
                            );

                        })
                    }
                </Select>
            </div>

            <div>
                <label htmlFor="qty" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
                <input type="text" name="qty" id="qty" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Quantity" required={true} />
            </div>

            {/* <div>
                <Label
                    htmlFor="image"
                    value="Upload file"
                />
                <FileInput
                    helperText="Image for Inventory"
                    id="image"
                    name='image'
                />
            </div> */}


            <Button
                size="xs"
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700  focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                <p className='text-white font-medium  text-sm'>
                    Create Inventory
                </p>
            </Button>
        </div>
    )

}