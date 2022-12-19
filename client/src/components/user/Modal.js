import React,{ useEffect, useState } from "react";
import classes from "./Modal.module.css";



export default function Modal({ setModal }) {
    const [cart,setCart] = useState([])
    const [cartItems,setCartItems] = useState()
    function closeModal() {
        setModal(false);
        // document.body.style.overflow = "visible";
    }
    
    console.log(cartItems)
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

        <div className={classes.container} onClick={closeModal}>
            <div className={classes.modalContainer}>
                <> 
                    <h1 className={classes.wrapper}>Shopping Cart</h1>
                        <div className={classes.project}>
                            <div className={classes.shop}>
                            {cartItems && cartItems.map(item=>(  
                                 <div className={classes.box}>
                                     <img src={item.product.image} alt=""/>
                                     <div className={classes.content}>
                                        <h3>{item.product.productName}</h3> 
                                        <h4>{item.product.sellingPrice * item.quantity} $</h4>
                                        <p className={classes.unit}>Quantity: <input value={item.quantity }/></p>
                                        <p className={classes.btnarea}>
                                            <i className="fa fa-trash"></i>
                                            <spn className={classes.btn2}>Remove</spn>
                                        </p>
                                     </div>
                                 </div>
                                  ))}
                            </div>
                        <div className={classes.rightbar}>
                            <p><span>Subtotal</span> <span>{cart.totalPrices}</span></p>
                            <hr>
                            </hr>
                            <p><span>Tax</span> <span>{cart.totalPrices}</span></p>
                            <hr>
                            </hr>
                            <p><span>Shipping</span> <span>{cart.totalPrices}</span></p>
                            <hr>
                            </hr>
                            <p><span>Total</span> <span>{cart.totalPrices}</span></p>

                            <a href="src/components/user/Modal#"><i className="fa fa-shopping-cart"></i>Checkout</a>


                        </div>

                        </div>
                </>
                </div>
        </div>

      
    );
}
