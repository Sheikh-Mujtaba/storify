import React, { useState } from 'react';
import '../styles/Cart.css'
function Cart({ cart,setCart  }) {

  const [price,setPrice ] =useState([]);



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
        <button className='add'>+</button>
        <div className='item-quantity'>{item.quantity}</div>
        <button  className='remove' >-</button>
        <button onClick={()=>handleRemove(item.id)} className='remove-cart'>Remove</button>
        
      </div>
    
    </div> 
    
  ))
)} 
{cart.length === 0 ?   '' :<button className='checkout'>Checkout</button>}

</div>
<div>{price}</div>
     
    </div>
  );
}

export default Cart;
