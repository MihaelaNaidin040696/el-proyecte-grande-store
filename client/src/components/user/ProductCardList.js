import ProductCard from "./ProductCard";

export default function ProductCardList(props) {
    return (
        <div style={{textAlign: 'center'}}>
            <ul style={{textAlign: 'center'}}>
                {props.products.map((product) => (
                    <li key={product.id}>
                        <ProductCard
                            id={product.id}
                            image={product.image}
                            name={product.productName}
                            sellingPrice={product.sellingPrice}
                            size={product.size}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}