import ClientForm from './clientForm';
import { addClient } from '../actions'
import {getClientTypes} from '../../client-type/services'
import { ClientType } from '@prisma/client'



export default async function page() {
    const clientTypes:ClientType[] = await getClientTypes()
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">

                <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">

                    <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                        Add New Client
                    </h2>
                    <form className="space-y-4 md:space-y-6" action={addClient}>
                        <ClientForm clientTypes={clientTypes} />
                    </form>
                </div>
            </section>



        </div>

    )
}