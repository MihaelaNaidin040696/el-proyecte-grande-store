import { FaShoppingCart, FaRegBookmark, FaFireAlt } from 'react-icons/fa';
import classes from './Products.module.css';

export default function ProductCard(props) {

    return (
        <div className={classes.productList}>
            <div key={props.id} className={classes.productCard}>
                <img src={props.image} alt='product-img' className={classes.productImage} />

                <FaShoppingCart className={classes.productCard__cart} />
                <FaRegBookmark className={classes.productCard__wishlist} />
                <FaFireAlt className={classes.productCard__fastSelling} />

                <div className={classes.productCard__content}>
                    <h3 className={classes.productName}>{props.name}</h3>
                    <div className={classes.displayStack__1}>
                        <div className={classes.productPrice}>${props.price}</div>
                        <div className={classes.productSales}>{props.totalSales} units sold</div>
                    </div>
                </div>
            </div>
        </div>
    );
}