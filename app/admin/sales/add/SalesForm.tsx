'use client'
import { ToastContainer } from 'react-toastify';
import { FileInput, Label, Button, Select, Datepicker } from 'flowbite-react';
import { addProduct } from '../actions'
import { Client, Product } from '@prisma/client'
import SearchAbleSelect from '../../components/SearchAbleSelect/SearchAbleSelect'


type PropType = {
    clients: Client[]
    products: Product[]
}

const SalesForm: React.FC<PropType> = (props) => {
    const { clients, products } = props;


    return (
        <section className="bg-white dark:bg-gray-900">
            <ToastContainer />
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    New Sale
                </h2>
                <form className="space-y-4 md:space-y-6 " action={addProduct}>


                    <div
                        className="max-w-lg"
                        id="selectDate" >
                        <div >
                            <Label
                                htmlFor="date"
                                value="Select Date"
                                id='date'
                            />
                        </div>

                        <Datepicker name='date' id='date' required={true} />
                    </div>



                    <div
                        className="max-w-lg"
                        id="selectClient" >
                        <Label
                            htmlFor="Cliet"
                            value="Select Client"
                            id='client'
                        />

                        <SearchAbleSelect name='client' options={clients} getLabel={(option: any) => `${option.name}`} getValue={(option: any) => `${option['id']}`} ></SearchAbleSelect>

                    </div>

                    <div className="grid grid-cols-1 gap-y-2 md:gap-x-2 md:grid-cols-3 justify-between  max-w-xl">
                        <div className='max-w-md' >
                            <Label
                                htmlFor="product"
                                value="Select Product"
                                id='product'
                            />
                            <SearchAbleSelect
                                name='product'
                                options={products}
                                getLabel={(option: any) => `${option.name}`}
                                getValue={(option: any) => `${option['id']}`} />

                        </div>

                        <div className='max-w-md' >
                            <Label
                                htmlFor="qty"
                                value="Enter Quantity"
                                id='qty'
                            />
                            <input
                                type="text" name="quantity"
                                id="quantity"
                                className="bg-gray-50  max-w-md border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="Quantity" required={true} />

                        </div>

                        <Button
                            size="xs"
                            type="button"
                            className=" w-1/4 md:w-full bg-primary-600 hover:bg-primary-700 self-end  focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg h-10  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                        >
                            <p className='text-white font-medium  text-sm'>
                                Add Item
                            </p>
                        </Button>



                    </div>
                    <Button

                        size="xs"
                        type="submit"
                        className="w-full bg-primary-600 hover:bg-primary-700  focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        <p className='text-white font-medium  text-sm'>
                            Add Sale
                        </p>
                    </Button>
                </form>
            </div >
        </section >
    );

}

export default SalesForm;