import React, { useEffect, useState } from 'react';
import '../styles/Cart.css'
function Cart({ cart,setCart  }) {

  const [price,setPrice ] =useState([]);
  // const handlePrice = ( ) =>{
  //   let ans = 0;
  //   cart.map((item) =>{
  //     ans+= item.quantity * item.price 
  //   })
  //   setPrice(ans)
  // }
  // useEffect(()=>{
  //   handlePrice();
  // })

  const handlePrice = () =>{
    let ans = 0 ;
    {cart.map((item)=>{
      ans+= item.quantity * item.price ;

    })
    setPrice(ans)
  }
  }
  useEffect(()=>{
    handlePrice();
  })
  const increaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const decreaseQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove items with 0 quantity
    );
  };


const handleRemove = (productId) =>{
  setCart((prevCart)=>{
    const updatedCart =prevCart.filter (item =>item.id !== productId);
    return updatedCart;
  })
}



  return (

    <div className='cart-section'>
      <div className='cart-wrapper'>
      {cart.length === 0 ? (
  <p>Your cart is empty</p>
) : (
  cart.map((item) => (
    <div key={item.id} className='cart-items'>
       <div> <img src={item.thumbnail} alt={item.title} className='item-image' /></div>
      <div><h3>{item.title}</h3></div>
      <div><p>€{item.price}</p></div>
  
      <div className='btns'>
        <button className='add' onClick={()=>increaseQuantity(item.id)}>+</button>
        <div className='item-quantity'>{item.quantity}</div>
        <button  className='remove'onClick={()=>decreaseQuantity(item.id)} >-</button>
        <button onClick={()=>handleRemove(item.id)} className='remove-cart'>Remove</button>
        
      </div>
    
    </div> 
    
  ))
)} 
<div><h2>Total : € {price}</h2></div>
{cart.length === 0 ?   '' :<button className='checkout'>Checkout</button>}

</div>

     
    </div>
  );
}

export default Cart;
