import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import classes from "./ProductPage.module.css";


function ProductPage(props) {
    const [data, setData] = useState([]);
    let {id} = useParams();
    const [selects,setSelects] = useState();


    const addToCart = async()=>{
        const requestOptions={
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            mode:'no-cors',
            body: JSON.stringify({
                "selects":selects
                })}
                
            console.log(requestOptions)
        
            const request = await fetch(`http://localhost:8080/cart/add-to-cart/${id}`,requestOptions)
            const response = await request.json();
            console.log(response)

    }
    useEffect(() => {
        const fetchProductById = async () => {
            const request = await fetch(
                "http://localhost:8080/prod/product/"+id
            )
            const response = await request.json();
            setData(response);
        };
        fetchProductById();
    }, [props.id])

    // useEffect(()=>{
    //     const requestOptions={
    //         method:'POST',
    //         headers:{
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         mode:'no-cors',
    //         body: JSON.stringify({
    //             "selects":selects
    //             })}
    //             console.log(id);
    //             console.log(requestOptions)

    //     const test = async()=>{
    //         const request = await fetch(`http://localhost:8080/cart/add-to-cart/${id}`,requestOptions)
    //         const response = await request.json();
    //         console.log(response)
    //     }
    // },[])

    return (
        <div className={classes.productContainer}>
            <div className={classes.productDiv}>
                <img className={classes.productImage} src={data.image}></img>
                <div className={classes.productInfo}>
                    <div className={classes.productBrandAndName}>
                        <h1>{data.brand}</h1>
                    </div>
                    <div className={classes.productName}>
                        <p>{data.productName}</p>
                    </div>
                    <div className={classes.productPrice}>
                        <p>{data.sellingPrice}$</p>
                    </div>
                    <div className={classes.productSizeInput}>
                        <form>
                            <label htmlFor="size"></label>
                            <select value={selects}  className={classes.inputstyle} onChange={e=>setSelects(e.target.value)}>
                                    <option value="">Choose your size</option>
                                    <option  value={data.size}>{data.size}</option>
                            </select>
                            <input onClick={addToCart}
                                className={classes.inputstyle}
                                type="submit"
                                value="Add to cart"
                                />
                        </form>
                    </div>
                    <div className={classes.productDescription}>
                        <p>
                            <b>Color:</b> {data.descriptionColor}
                        </p>
                        <p>
                            <b>Material:</b> {data.descriptionMaterial}
                        </p>
                        <p>
                            <b>Interior:</b> {data.descriptionInterior}
                        </p>
                        <p>
                            <b>Sole:</b> {data.descriptionSole}
                        </p>
                        <p>
                            <b>Reference Code:</b> {data.referenceCode}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;