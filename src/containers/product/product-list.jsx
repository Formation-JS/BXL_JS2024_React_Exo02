import ProductCard from '../../components/product-card/product-card.jsx';
import data from '../../data/products.json';


export default function ProductList() {

    // CSS in JS
    const style = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1ch'
    };

    return (
        <>
            <h2>Liste des produits</h2>
            <div style={style}>
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