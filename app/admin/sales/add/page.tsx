import { getClients } from '../../clients/services';
import { getProducts } from '../../products/services';
import SalesForm from './SalesForm';

export default async function page() {
    const clientsData =  getClients()
    const productsData =  getProducts()
    const [clients, products] = await Promise.all([clientsData, productsData])
    
    return (
        <div>
            <SalesForm clients={clients} products={products} />
        </div>

    )
}