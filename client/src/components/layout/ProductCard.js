import {FaShoppingCart} from 'react-icons/fa';
import classes from './Products.module.css';

export default function ProductCard(props) {

    return (
        <>
            <div key={props.id} className={classes.productCard}>

                <FaShoppingCart className={classes.productCard__cart}/>

                <div className={classes.productCard__content}>
                    <img src={props.image} alt='product-img' className={classes.productImage}/>
                    <h3 className={classes.productName}>{props.name}</h3>
                    <div className={classes.displayStack__1}>
                        <div className={classes.productPrice}>${props.price}</div>
                        <div className={classes.productSales}>{props.totalSales} units sold</div>
                    </div>
                </div>

            </div>
        </>
    );
}