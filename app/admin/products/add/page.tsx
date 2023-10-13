import { getCategories } from '../../categories/services';
import ProductForm from './productForm';

export default async function page() {
    const categories = await getCategories()
    return (
        <div>
            <ProductForm categories={categories} />
        </div>

    )
}