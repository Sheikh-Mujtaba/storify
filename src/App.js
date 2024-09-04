import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from './components/Footer';
import Products from './pages/Products';
import Cart from './components/Cart';
import ProductsDetails from './pages/ProductsDetails';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [cart,setCart] =useState([]);

 
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
  
  return (
    <div className="App">
    <Router>
      <Nav size ={cart.length}/>
      <Routes>
        <Route  path='' element={<Home/>}/>
        <Route  path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products />}/>
        <Route  path='/productsDetails/:productId' element={<ProductsDetails addToCart={addToCart}/>}/>
        <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>

      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
