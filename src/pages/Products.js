import React, { useState, useEffect } from 'react';
import '../styles/Products.css';
import { Link } from 'react-router-dom';

function Products() {
  // State to store the list of products
  const [products, setProducts] = useState([]);
  
  // API URL
  const API = 'https://dummyjson.com/products';

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch data from the API
        const response = await fetch(API);
        const data = await response.json();
        // Update state with the fetched products
        setProducts(data.products);
      } catch (error) {
        // Handle errors
        console.log('Error fetching products:', error);
      }
    };
    
    // Call the fetch function
    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className='products-section'>
      <div className='products-wrapper'>
        <div className='products-block'>
          {/* Map through the products and render each one */}
          {products.slice(0,10).map((product) => (
            <div key={product.id} className='product' >
              {/* Link to product details page */}
              <Link 
                to={`/productsDetails/${product.id}`} 
                style={{ textDecoration: 'none', color: 'black' }}
              >
                {/* Product title */}
                <div><img src={product.images} className='product-img'/></div>
                <div><h3>{product.title}</h3></div>
                <div>€{product.price}</div>
             
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Products;
