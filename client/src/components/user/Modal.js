import { PermDataSettingTwoTone } from "@mui/icons-material";
import React,{ useEffect, useState } from "react";
import classes from "./Modal.module.css";


export default function Modal({ setModal }) {
    const [cart,setCart] = useState([]);
    const [cartItems,setCartItems] = useState([]);
    const [qty,setQty] = useState();
    // const [myId,setMyId] = useState();
    // const [extracted, setExtracted] = useState([])


    function handleClick(e){
        const {type,id} = e.target.dataset

        const copy = [...cartItems];
        const index = copy.findIndex(cartItems=>{
            return cartItems.product.id === +id;
        });

        if(index>=0){
            switch(type){
                case 'decrement':{
                    if(copy[index].quantity > 1){
                        --copy[index].quantity
                        fetchUpdateCartItemQuantity(copy[index].product.id,copy[index].quantity)
                        break;
                    }
                
                }
                case 'increment':{
                    ++copy[index].quantity;
                    fetchUpdateCartItemQuantity(copy[index].product.id,copy[index].quantity)
                    break;
                }
                case 'remove':{
                    if(copy[index].quantity < 1){
                        copy.splice(index,1);
                        deleteItem(copy[index].product.id);
                        break;
                    }
                }
       
            }
            setCartItems(copy)
        }
    }

    // console.log(extracted);
    // const updateQuantity = (currentId) => {
    //     let element = extracted.filter(x=>x.id == currentId)[0];
    //     let filteredArray = extracted.filter(x => x!=element);
    //     console.log("elementtt",element.quantity)
    //     let newElement = {id:parseInt(currentId),quantity:qty};
    //     filteredArray.push(newElement);
    //     setExtracted(filteredArray);
    // }

    // const updateCartItem = async (e) =>{
    //     e.preventDefault();
    //     const currentId = e.currentTarget.id;  

    //     let test;
    //     var htmlText = e.currentTarget.value;
    //     console.log("html text",htmlText)
    //     if(htmlText == "+"){
    //         setQty(99)
    //     }
    //     if(htmlText=="-"){
    //         setQty("11111")
    //     }    
    //     updateQuantity(currentId,test);
    // }



//   function addItemQty(e){
//     // console.log(newlist)
//   }

    //   console.log(e.target.innerText)
    //   let newList = [];
    //   let obj = {id: '', quantity: ''}
    //   let total = 0;
    //   for (let index = 0; index < cartItems.length; index++) {
    //       const element = cartItems[index];
    //       const p = element.product.id
    //       setItemQty({id:p,quantity:element.quantity})

    //       console.log(p, e.currentTarget.id)

    //   if(p == e.currentTarget.id){
    //       const sellingPer = element.product.sellingPrice;
    //       if(e.target.innerText=="+"){
    //           element.quantity += 1;

    //       }else{
    //           element.quantity -= 1;

    //       }

    //       element.totalPrice = element.quantity * sellingPer;
    //   }

    //   newList.push(element);
    //   total += element.totalPrice;
    //   cart.totalPrices = total;
    //   obj.id = p;
    //   obj.quantity = element.quantity;
    //   setItemQty({id:p,quantity:element.quantity})


//   }

//       setCart(cart);
//       setCartItems(newList);
//       fetchUpdateCartItemQuantity();

//   }




  const fetchUpdateCartItemQuantity = async (id,quantity)=>{
      fetch("http://localhost:8080/cart/update-cart-item-quantity",{ method: 'POST',
      body: JSON.stringify({
        id: id,quantity:quantity
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          // Handle data
       })
       .catch((err) => {
          console.log(err.message);})

  }




    const fetchCart = async () =>{
        const request = await fetch("http://localhost:8080/cart/get-cart")
        const response = await request.json();
        setCart(response);
        setCartItems(response.cartItems)
    }

    useEffect(()=>{
        fetchCart();
    },[])

    // useEffect(()=>{
    //     extract();
    // },[cartItems])

    // const extract = () =>{
    //     for(let c of cartItems){
    //         console.log(c.product.id)
    //         const newObj = {id:c.product.id, quantity: c.quantity}
    //         setExtracted(extracted => [...extracted,newObj])
    //     }
    // }
    
    const deleteItem = async (id) =>{
        const request = await fetch(`http://localhost:8080/cart/delete-cart-item/${id}`,{method:'DELETE'})
        const response = await request.json();
        setCart(response);
        setCartItems(response.cartItems);
        }

    const fetchDeleteItemFromCart = async (e)=>{
          const request = await fetch(`http://localhost:8080/cart/delete-cart-item/${e.target.id}`,{method:'DELETE'})
          const response = await request.json();
          setCart(response);
          setCartItems(response.cartItems);
      }

      function closeModal() {
        setModal(false);
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
                                       <button 
                                       value={"-"}
                                       data-type="decrement"
                                       onClick={handleClick}
                                       id={item.product.id} 
                                       data-id={item.product.id}>-</button>
                                       <input
                                       onChange={(e)=> setQty(item.quantity)}
                                       value={item.quantity}/>
                                       <button
                                       value={"+"}  
                                       data-type="increment"
                                       onClick={handleClick}
                                       id={item.product.id} 
                                       data-id={item.product.id}>+</button></p>
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
