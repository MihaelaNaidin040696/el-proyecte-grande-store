// import ProductsCarousel from "../components/layout/Carousel";
import { useEffect, useState } from "react";
import ProductCardList from "../components/ProductCardList";
import Slider from "../components/slider/Slider";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedProducts, setLoadedProducts] = useState([]);

    useEffect(() => {
        console.log(loadedProducts);
        setIsLoading(true);
        fetch("http://localhost:8080/prod/products")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const products = [];

                for (const key in data) {
                    console.log("keeeeeeeey" + key);
                    const product = {
                        id: key,
                        ...data[key],
                    };
                    products.push(product);
                }
                console.log(products);
                setIsLoading(false);
                setLoadedProducts(products);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    return (
        <section>
            <Slider />
            <ProductCardList products={loadedProducts} />
        </section>
    );
}

export default Home;
