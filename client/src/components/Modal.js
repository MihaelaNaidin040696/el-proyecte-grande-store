import { South } from "@mui/icons-material";
import React,{ useEffect, useState } from "react";
import classes from "./Modal.module.css";


export default function Modal({ setModal }) {
    const [cart,setCart] = useState([])
    const [cartItems,setCartItems] = useState()
    const [itemQty, setItemQty] = useState({id:'', quantity:'' })
    const [qty,setQty] = useState();
    console.log(cart)
    console.log(cartItems);
    
    function addItemQty(e){
        let newList = [];
        let obj = {id: '', quantity: ''}
        let total = 0;
        for (let index = 0; index < cartItems.length; index++) {
            const element = cartItems[index];
            const p = element.product.id
            console.log(p, e.currentTarget.id)
        if(p == e.currentTarget.id){
            const sellingPer = element.product.sellingPrice;
            element.quantity += 1;
            element.totalPrice = element.quantity * sellingPer;
            
        }
        
        newList.push(element);
        total += element.totalPrice;
        cart.totalPrices = total;
        obj.id = p;
        obj.quantity = element.quantity;
        setItemQty({id:p,quantity:element.quantity+1})

        console.log(itemQty);
        }
        
        setCart(cart);
        setCartItems(newList);


    }

    function closeModal() {
        setModal(false);
    }

    useEffect(() =>{
        const fetchCart = async ()=>{
            const request = await fetch()
        }
        console.log('Am 3 leeeeeei')
    }, [cartItems])

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
                                        <p className={classes.unit}>Quantity:
                                         <button>-</button>
                                         <input 
                                         onChange={(e)=> setQty(item.quantity)}
                                         value={item.quantity}/>
                                         <button onClick={addItemQty} id={item.product.id}>+</button></p>
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
