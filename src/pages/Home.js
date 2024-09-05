import React, { useState ,useEffect} from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



function Home() {
    const [deals,setDeals] =useState([]);
    const {productId} =useParams();
    const API ='https://dummyjson.com/products';

    useEffect(()=>{
      const fetchDeals=async ()=>{
        try {
          const response =await fetch(API);
          const data =await response.json();
          setDeals(data.products)

         } catch (error) {
          console.log('error',error)
         }
        
      }
      fetchDeals ();
    } ,[])
  

  return (
    <>
    <div className='home-section'>
      <div className='home-wrapper'>
        <div className='hero-heading'>
          <h1>
            More Deals here
            <br />
            50% off
          </h1>
        </div>
      </div>
    </div>

    <div className='deals-section'>
        <div className='deals-wrapper'>

            <div className='deals-heading'> 
            <h2>New on the Store</h2>
            </div>

            <div className='deals-products'>

              {deals.slice (0,3 ).map((deal)=>(
                <div key= {deal.id} className='deals'> 

               <Link   to={`/productsDetails/${deal.id}`}  style={{textDecoration : 'none' , color :'black'}} >
                <div><img src={deal.images} className='deal-img'/></div>
                <div><h3>{deal.title}</h3></div>
                <div style={{textTransform:'capitalize'}}>{deal.category}</div>
                </Link>

                </div>
              ))}


            </div>

        </div>

    </div>
    </>
  );
}

export default Home;


// to={`/productDetails/${deal.id}`}