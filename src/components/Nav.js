import React, { useState } from 'react';
import '../styles/Nav.css';
import { Link } from 'react-router-dom';
import { FaCartArrowDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
 function Nav({size}) {

  const [show,setShow] =useState (false);

  const handleClick=()=>{
    setShow(!show);
  }


  return (
    <div className='nav-section'>
      <div className='nav-wrapper'> 

       

        <div className='logo'>
      <Link style={{textDecoration:'none' ,color :'black' , fontSize:'1rem'}} to='/home'>    <h2>Storify</h2></Link>
        </div>

        <div className={`nav-links ${show ? 'active' : ''}` }>
        <Link style={{textDecoration:'none' ,color :'black'}} to='/products'>   <p>Products</p></Link>
    
        <Link style={{textDecoration:'none' ,color :'black'}} to='/login'>   <p>Login</p></Link>
          <Link style={{textDecoration:'none' ,color :'black' , fontSize:'1rem'}} to='/cart'>      <FaCartArrowDown  /></Link>
        <div className='size'>{size}</div>

        </div>
        <div className='burger-menu' onClick={handleClick}>
        {show ?  <RxCross1 />:  <RxHamburgerMenu /> }
         </div>

      </div>
      
    </div>
  )
}
export default Nav;