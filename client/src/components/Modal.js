import React,{ useEffect, useState } from "react";
import classes from "./Modal.module.css";


export default function Modal({ setModal }) {
    const [cart,setCart] = useState([])
    const [cartItems,setCartItems] = useState()
    function closeModal() {
        setModal(false);
        document.body.style.overflow = "visible";
    }

    useEffect(()=>{
        const fetchCart = async ()=>{
            const request = await fetch("http://localhost:8080/cart/get-cart")
            const response = await request.json();
            setCart(response);
            setCartItems(response.cartItems)
        }
        fetchCart();
    },[])
    // console.log(cart.cartItems)
    return (

        <div onClick={()=>{closeModal(); }} className={classes.container}>
            <div className={classes.modalContainer}>
                <> 
                {cartItems && cartItems.map(item=>(
                    <p>{item.totalPrice}</p>
                ))}
                <p>Total price: {cart.totalPrices}</p>
                <p>Total items: {cart.totalItems}</p>
                </>
               
                <p></p>
                    
                
                </div>
        </div>
    );
}
