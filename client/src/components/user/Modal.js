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

        const fetchDeleteItemFromCart = async (e)=>{
            const request = await fetch(`http://localhost:8080/cart/delete-cart-item/${e.target.id}`,{method:'DELETE'})
            const response = await request.json();
            setCart(response);
            setCartItems(response.cartItems);
        }
    return (
        <>

        <div className={classes.container}>

            <div className={classes.modalContainer}>
                <> 
                <div className={classes.close_container}>
                <h1 className={classes.wrapper}>Shopping Cart</h1>
                <span className={classes.close_btn}>
                <i
                                    className="fas fa-close"
                                    onClick={closeModal
                                    }
                                ></i>
                </span>
                </div>

                        <div className={classes.project}>
                            <div className={classes.shop}>
                            {cartItems && cartItems.map(item=>(  
                                 <div className={classes.box}>
                                     <img src={item.product.image} alt=""/>
                                     <div className={classes.content}>
                                        <h3>{item.product.productName}</h3> 
                                        <h4>{item.product.sellingPrice * item.quantity} $</h4>
                                        <p className={classes.unit}>Quantity: <button>-</button><input value={item.quantity }/><button>+</button></p>
                                        <p className={classes.btnArea}>
                                            <i className="fa fa-trash"></i>
                                            <span className={classes.btn2} id={item.product.id} onClick={fetchDeleteItemFromCart}>Remove</span>
                                        </p>
                                     </div>
                                 </div>
                                  ))}
                            </div>
                        <div className={classes.rightBar}>
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

                            <a href="/order"><i className="fa fa-shopping-cart"></i>Checkout</a>


                        </div>

                        </div>
                </>
                </div>
        </div>

      </>
    );
}
