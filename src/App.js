import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CheckOut from "./Components/BillingDetails/CheckOut.js";
import Cart from "./Components/CartOut/Cart.js";
import Contact from "./Components/Contact/Contact.js";
import Navbar from "./Components/Nav/TestNav.js";
import HomePage from "./Components/HomePage/HomePage.js";
import Product from "./Components/Product/Product.js";
import Shop from "./Components/Shop/Shop.js";
import Footer from "./Components/Footer.js/Footer.js";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/product" element={<Product />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
