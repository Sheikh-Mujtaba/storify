import React, { useEffect, useState } from 'react';
import '../styles/ProductsDetails.css';
import { useParams } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

 function ProductsDetails({addToCart}) {
    const [details,setDetails]=useState([]);
    const {productId} =useParams();
    const API = 'https://dummyjson.com/products/';

    useEffect(() => {
        const fetchDetails = async () => {
          try {
            // Fetch data from the API
            const response = await fetch(`${API}${productId}`);
            const data = await response.json();
            // Update state with the fetched products
            setDetails(data);
          } catch (error) {
            // Handle errors
            console.log('Error fetching products:', error);
          }
        };
        
        // Call the fetch function
        fetchDetails();
      }, [productId]); // Empty dependency array means this effect runs once on mount
    
  return (
   <PageWrapper>
    <div className='details-section'>
        <div className='details-wrapper'>
      
      <div >
        <img src={details.images} className='details-img'/>
      </div>

      <div className='details-txt'>
         <h1>{details.title}</h1>
         <h2>€{details.price}</h2>
         {/* <p>{details.description}</p> */}
         <button className='add-cart-btn'  onClick={() => addToCart(details)}>Add to cart</button>
      </div>
       
        </div>
      
    </div>
    </PageWrapper>
  )
}
export default ProductsDetails;