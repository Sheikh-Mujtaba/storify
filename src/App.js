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
  const [cart, setCart] = useState([]);
  const [alertMessage, setAlertMessage] = useState('');  // State for alert message
  const [showAlert, setShowAlert] = useState(false);     // State to show/hide alert

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(item => item.id === product.id);

      if (existingProductIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        showTemporaryAlert(`${product.title} added to the cart!`);
        return updatedCart;
      } else {
        showTemporaryAlert(`${product.title} added to cart!`);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Function to display the alert for a few seconds
  const showTemporaryAlert = (message) => {
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);  // Hide alert after 3 seconds
  };

  return (
    <div className="App">
      {showAlert && <div className="alert">{alertMessage}</div>}  {/* Display alert if showAlert is true */}
      <Router>
        <Nav size={cart.length} />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Products addToCart={addToCart}/>} />
          <Route path='/productsDetails/:productId' element={<ProductsDetails addToCart={addToCart} />} />
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;