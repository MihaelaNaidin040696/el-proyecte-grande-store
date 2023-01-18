import MainDash from "../components/admin/MainDash";
import classes from './Dashboard.module.css';
import {useEffect, useState} from "react";

export default function Dashboard() {
    const baseURL = "http://localhost:8080/admin";
    const [sales, setSales] = useState([]);
    const [revenue, setRevenue] = useState([]);
    const [expenses, setExpenses] = useState([]);
    const [totalSales, setTotalSales] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);
    const [totalExpenses, setTotalExpenses] = useState(0);
    const [loadedProducts, setLoadedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData()
            .then(() => {
                setIsLoading(false);
            });
    }, [isLoading]);


    async function fetchData() {
        await getProductsFetch();
        await getSalesFetch();
        await getTotalSalesFetch();
        await getRevenueFetch();
        await getTotalRevenueFetch();
        await getExpensesFetch();
        await getTotalExpensesFetch();
    }

    async function getProductsFetch() {
        const request = await fetch(`${baseURL}`);
        const response = await request.json();
        setLoadedProducts(response);
    }

    async function getSalesFetch() {
        const request = await fetch(`${baseURL}/get-sales`);
        const response = await request.json();
        setSales(response);
    }

    async function getRevenueFetch() {
        const request = await fetch(`${baseURL}/get-revenue`);
        const response = await request.json();
        setRevenue(response);
    }

    async function getExpensesFetch() {
        const request = await fetch(`${baseURL}/get-expenses`);
        const response = await request.json();
        setExpenses(response);
    }

    async function getTotalSalesFetch() {
        const request = await fetch(`${baseURL}/get-total-sales`);
        const response = await request.json();
        setTotalSales(response);
    }

    async function getTotalRevenueFetch() {
        const request = await fetch(`${baseURL}/get-total-revenue`);
        const response = await request.json();
        setTotalRevenue(response);
    }

    async function getTotalExpensesFetch() {
        const request = await fetch(`${baseURL}/get-total-expenses`);
        const response = await request.json();
        setTotalExpenses(response);
    }

    return (
        <div className={classes.Dashboard}>
            <div className={classes.DashGlass}>
                {!isLoading && <>
                    <MainDash products={loadedProducts}
                              setProducts={setLoadedProducts}
                              sales={sales}
                              totalSales={totalSales}
                              revenue={revenue}
                              totalRevenue={totalRevenue}
                              expenses={expenses}
                              totalExpenses={totalExpenses}
                    />
                </>}
            </div>
        </div>
    );
}

