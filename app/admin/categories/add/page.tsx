'use client'


import { addCategory } from '../actions'
import { ToastContainer } from 'react-toastify';
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { FileInput, Label } from 'flowbite-react';

import { Button } from 'flowbite-react';
import FileUpload from '../../components/fileUpload/fileUpload';



export default function page() {
    // const { pending } = useFormStatus()




    return (
        <section className="bg-white dark:bg-gray-900">
            <ToastContainer />
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    Add New Category
                </h2>
                <form className="space-y-4 md:space-y-6" action={addCategory}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                        <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Category Name" required={true} />
                    </div>

                    <div>
                        {/* <FileUpload/> */}
                        <Label
                            htmlFor="file"
                            value="Upload file"
                        />
                        <FileInput
                            helperText="A profile picture is useful to confirm your are logged into your account"
                            id="file"
                            name='file'
                        />
                    </div>


                    {/* <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create Agent</button> */}

                    <Button
                        // isProcessing={pending}
                        // disable={pending}
                        size="xs"
                        type="submit"
                        className="w-full bg-primary-600 hover:bg-primary-700  focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        <p className='text-white font-medium  text-sm'>
                            Create Category
                        </p>
                    </Button>
                </form>
            </div >
        </section >
    )
}