'use client'
import { Button, Label, Select } from 'flowbite-react';
import { PartnerRole } from '@prisma/client'

type PropType = {
    partnerRoles: PartnerRole[]
    addPartnerRole: any
}

const PartnerForm: React.FC<PropType> = (props) => {
    const { partnerRoles, addPartnerRole } = props
    
    return (
        <form className="space-y-4 md:space-y-6" action={addPartnerRole}>
            <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
            </div>

            <div>
                <div >
                    <Label
                        htmlFor="roleId"
                        value="Select Partner Role"
                    />
                </div>
                <Select
                    id="roleId"
                    name='roleId'
                    required
                >
                    {
                        partnerRoles.map((role: PartnerRole) => {
                            return (
                                <option key={role.id} value={role.id}>
                                    {role.name}
                                </option>
                            );

                        })
                    }
                </Select>
            </div>
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required={true} />
            </div>


            <div>
                <label htmlFor="Contact Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contact Number</label>
                <input type="tel" name="contactNumber" id="contactNumber" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="984566231" required={true} />
            </div>
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required={true} />
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
                    Create Agent
                </p>
            </Button>
        </form>

    );

}

export default PartnerForm;