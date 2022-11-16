import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ProductPage(props) {
    const [data, setData] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const request = await fetch(
                "http://localhost:8080/prod/product/"+id
            )
            const response = await request.json();
            setData(response);
        };
        fetchData();
    },[props.id])
   
    return (
        <div>
            <div>{data.name}</div>
            <div>{data.sellingPrice}</div>
        </div>
    );
 }

export default ProductPage;