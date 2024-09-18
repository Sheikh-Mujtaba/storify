import React, { useState, useEffect } from 'react';
import '../styles/Products.css';
import { Link } from 'react-router-dom';

function Products({addToCart}) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');

  const API = 'https://dummyjson.com/products';

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products); // Set initial filteredProducts to all products
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array means this effect runs once on mount

const handleCategory=(e)=>{
  const selectedCategory=e.target.value ;
  setCategory(selectedCategory);

  if (selectedCategory === '' || selectedCategory === 'all') {
    setFilteredProducts(products)
  } else {
    const filtered =products.filter ((product)=> product.category.toLowerCase() === selectedCategory.toLowerCase());
    setFilteredProducts(filtered)
  }
}

  return (
    <div className='products-section'>
      <div className='products-wrapper'>
        <div className='select-container'>
        <div className='category-filter'>
            <select value={category} onChange={handleCategory}>
              <option value='all'>All Categories</option>
              <option value='beauty'>Beauty</option>
              <option value='fragrances'>Fragrances</option>
              <option value='furniture'>Furniture</option>
            
            </select>
            </div>

        </div>

        <div className='products-block'>
          {/* Map through the filteredProducts and render each one */}
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0,15).map((product) => (
              <div key={product.id} className='product'>
                <Link 
                  to={`/productsDetails/${product.id}`} 
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  <div><img src={product.images} className='product-img' alt={product.title} /></div>
                  <div><h3>{product.title}</h3></div>
                  <div style={{ textTransform: 'capitalize' }}>{product.category}</div>
                  <div><h3>€{product.price}</h3></div>
                 
                </Link>
                <button className='add-cart-btn'  onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;

