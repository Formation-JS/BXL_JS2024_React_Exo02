import ProductCard from '../../components/product-card/product-card.jsx';
import data from '../../data/products.json';


export default function ProductList() {

    return (
        <>
            <h2>Liste des produits</h2>
            <div>
            {data.map(product => (
                <ProductCard
                {...product}
                key={product.id}
                desc={product.description}
                />
            ))}
            </div>
        </>
    )
}