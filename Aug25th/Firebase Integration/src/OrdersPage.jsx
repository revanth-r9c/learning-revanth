import React, { useState, useEffect } from 'react';

function OrdersPage() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);

    return (
        <div className="OrdersPage">
            <h1>Your Cart</h1>
            {cartItems.length > 0 ? (
                <div className="OrdersCard">
                    {cartItems.map((item) => (
                        <div className="inner" key={item._id}>
                            <p><b>Name:</b> {item.name}</p>
                            <p><b>Excerpt:</b> {item.excerpt}</p>
                            <p><b>Price:</b> ${item.price}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
}

export default OrdersPage;
