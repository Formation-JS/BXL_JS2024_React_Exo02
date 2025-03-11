import clsx from 'clsx';
import style from './product-card.module.css';
import Price from '../price/price.jsx';

export default function ProductCard({
    id, name, ref, desc, category, price, onSale
}) {

    return (
        <div className={style['product-card']}>
            <span>{name} [{category}]</span>
            <span>Référence : {ref}</span>
            <span>{desc || 'Aucune description !'}</span>
            {/* <span className={style.price + ' ' + (onSale ? style.promo : '')}>{price}</span> */}
            {/* <span className={clsx(style.price, onSale && style.promo)}>
                {price.toLocaleString('fr-be', { style: 'currency', currency: 'EUR' }) }
            </span> */}
            <Price value={price} className={clsx(style.price, onSale && style.promo)} />
        </div>
    );
};