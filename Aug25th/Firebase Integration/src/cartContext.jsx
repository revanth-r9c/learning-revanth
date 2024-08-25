// CartContext.js
import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <CartContext.Provider value={{ cart, count, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
