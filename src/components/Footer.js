import React from 'react';
import '../styles/Footer.css';
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

 function Footer() {
  return (
    <div className='footer-section'>
        <div className='footer-wrapper'>
            <div>
            <h1>Storify</h1>

<p>305 Harrison St, Seattle, WA 98109</p>
<p>seattle@example.com</p>
            </div>
            <div className='copyright'>
                <p>© Copyright</p>

                <div className='links'>
                <FaFacebook />
                <CiInstagram />


                </div>

            </div>
      


        </div>
      
    </div>
  )
}
export default Footer ;