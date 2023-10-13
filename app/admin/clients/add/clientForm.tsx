'use client'
import { Button, FileInput, Label, Select } from 'flowbite-react';
import { ClientType } from '@prisma/client'

type PropType = {
    clientTypes: ClientType[]
}

const ClientForm: React.FC<PropType> = (props) => {
    const { clientTypes } = props
    return (
        <div className="space-y-4 md:space-y-6">

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
                        clientTypes.map((clientType: ClientType) => {
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
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
            </div>

            <div>
                <label htmlFor="Contact Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
                <input type="tel" name="contactNumber" id="contactNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="984566231" required={true} />
            </div>

            <div
                className="max-w-md"
                id="textarea"
            >
                <div className="mb-2 block">
                    <Label
                        htmlFor="address"
                        value="Client's address"
                    />
                </div>
                <textarea
                    name="address"
                    rows={4}
                    id="address"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="address"
                    required={true}
                />

                {/* <Text
                    name="address"
                    id="address"
                    placeholder="Address"
                    // rows={4}
                /> */}
            </div>
            <Button
                size="xs"
                type="submit"
                className="w-full bg-primary-600 hover:bg-primary-700  focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg  px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
                <p className='text-white font-medium  text-sm'>
                    Add Client
                </p>
            </Button>
        </div>

    );

}

export default ClientForm;