import ProductsCarousel from "../components/layout/Carousel";
import ProductCard from "../components/layout/ProductCard";
import classes from '../components/layout/Products.module.css';
import {useEffect, useState} from "react";
import ProductCardList from "../components/layout/ProductCardList";
import { ExposureTwoTone } from "@mui/icons-material";

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedProducts, setLoadedProducts] = useState([]);

    useEffect(() => {
        console.log(loadedProducts)
        setIsLoading(true);
        fetch("http://localhost:8080/prod/products")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const products = [];

                for (const key in data) {
                    console.log("keeeeeeeey"+key)
                    const product = {
                        id: key+1,
                        ...data[key]
                    };
                    products.push(product);
                }
                console.log(products)
                setIsLoading(false);
                setLoadedProducts(products);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>
                    Loading...
                </p>
            </section>
        )
    }

    return (
        <section>
            <ProductsCarousel/>
            <ProductCardList products={loadedProducts} />
        </section>
    );
    

  
}

export default Home;