import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Home from "./Home";
import NonVeg from "./NonVeg";
import Veg from "./Veg";
import PurchaseHistory from "./PurchaseHistory";
import AboutUs from "./AboutUs";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import "./App.css";
import GoogleLoginComponent from "./GoogleLoginComponent";
import { GoogleOAuthProvider } from "@react-oauth/google";


import { faHome, faLeaf, faDrumstickBite, faShoppingCart, faHistory, faInfoCircle, faEnvelope, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Login from "./Login";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  const cart = useSelector((state) => state.cart);
  const totalitems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
    <BrowserRouter>
  <nav>
    <div className="nav">
      <Link to="/home" className="nav-link">
        <span style={{color:"green"}}> <FontAwesomeIcon icon={faHome} className="icon" /></span> 
        Home
      </Link>
      <Link to="/veg" className="nav-link">
        <span style={{color:"green"}}> <FontAwesomeIcon icon={faLeaf} className="icon" /></span> 
        Veg
      </Link>
      <Link to="/nonveg" className="nav-link">
        <span style={{color:"red"}}><FontAwesomeIcon icon={faDrumstickBite} className="icon" /></span> 
        Nonveg
      </Link>
      <Link to="/aboutus" className="nav-link">
        <span style={{color:"orange"}}>  <FontAwesomeIcon icon={faInfoCircle} className="icon" /></span> 
        About Us
      </Link>
      <Link to="/contactus" className="nav-link">
        <span style={{color:"orange"}}><FontAwesomeIcon icon={faEnvelope} className="icon" /></span> 
        Contact Us
      </Link>
      <Link to="/purchasehistory" className="nav-link">
        <span style={{color:"blue"}}> <FontAwesomeIcon icon={faHistory} className="icon" /></span> 
        Purchase History
      </Link>
      <Link to="/cart" className="nav-link">
      <span style={{color:"red"}}>
        <FontAwesomeIcon icon={faShoppingCart} className="icon" />
      </span> 
     <span style={{color:"orange"}}>{totalitems}</span> 
    </Link>

      <Link to="/login" className="login-link">
        <span style={{color:"red"}}><FontAwesomeIcon icon={faSignInAlt} /> </span> 
      </Link>
    </div>
  </nav>

  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/veg" element={<Veg />} />
    <Route path="/nonveg" element={<NonVeg />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/purchasehistory" element={<PurchaseHistory />} />
    <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/contactus" element={<ContactUs />} />
    <Route path="/login" element={<Login />}/>
  </Routes>
</BrowserRouter>

    </>
  );
}

export default App;

