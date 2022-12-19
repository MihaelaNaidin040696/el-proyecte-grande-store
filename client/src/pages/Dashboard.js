import MainDash from "../components/admin/MainDash";
import classes from './Dashboard.module.css';
import {useEffect, useState} from "react";

export default function Dashboard() {
    const baseURL = "http://localhost:8080/admin";
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetch(`${baseURL}`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setLoadedProducts(data);
                setIsLoading(false);
            })
    }, []);

    return (
        <div className={classes.Dashboard}>
            <div className={classes.DashGlass}>
                {!isLoading && <>
                    <MainDash products={loadedProducts} setProducts={setLoadedProducts}/>
                </>}
            </div>
        </div>
    );
}

