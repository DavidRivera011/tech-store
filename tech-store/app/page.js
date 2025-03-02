'use client';
import { useState } from "react";
import ProductList from "../components/ProductList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Cart from "../components/Cart";
export default function Home() {
    const [cart, setCart] = useState([]);
    const addToCart = (product) => setCart([...cart, product]);
    const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));
    const clearCart = () => {
      if (confirm("¿Seguro que quieres vaciar el carrito?")) {
        setCart([]);
      }
    };
    return (
      <div className="container">
        <Header />
        <ProductList addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} clearCart={clearCart} />
        <Footer />
      </div>
    );
  }