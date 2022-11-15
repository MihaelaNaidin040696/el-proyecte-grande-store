import {FaShoppingCart} from 'react-icons/fa';
import classes from './Products.module.css';

export default function ProductCard(props) {
    return (
        <>
            <div key={props.id} className={classes.productCard}>

                <FaShoppingCart className={classes.productCard__cart}/>

                <div className={classes.productCard__content}>
                    <img src={props.image} alt={props.name} className={classes.productImage}/>
                    <p className={classes.productName}>{props.name}</p>
                    <div className={classes.displayStack__1}>
                        <div className={classes.productPrice}>${props.sellingPrice}</div>
                        <div className={classes.productSales}>{props.size} size</div>
                    </div>
                </div>

            </div>
        </>
    );
}