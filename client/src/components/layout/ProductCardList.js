import ProductCard from "./ProductCard";
import classes from "./ProductCardList.module.css";

function ProductCardList(props){
    return (
        <div className={classes.container}>
            <ul className={classes.myUL}>
                {props.products.map((product, index) => (
                    <li>
                        <ProductCard
                            key={index}
                            id={product.id}
                            image={product.image}
                            name={product.productName}
                            sellingPrice={product.sellingPrice}
                            size = {product.size}
                            // description={product.description}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductCardList;
