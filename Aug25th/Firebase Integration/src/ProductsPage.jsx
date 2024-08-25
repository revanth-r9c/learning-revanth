import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ProductsPage() {
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        displayProducts();
    }, []);

    function displayProducts() {
        const url = "http://localhost:3000/api/v1/products";
        axios.get(url)
            .then(response => {
                setData(response.data.products);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleAddToCart = (product) => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        savedCart.push(product);
        localStorage.setItem('cart', JSON.stringify(savedCart));
        navigate('/orders');
    };

    return (
        <div className="ProductsPage">
            <div className="cartCount" onClick={() => navigate('/orders')}>
                <p>Cart</p>
                <p>{(JSON.parse(localStorage.getItem('cart')) || []).length} items</p>
            </div>
            <div className="ProductsCard">
                {data.map((product) => (
                    <div className="inner" key={product._id}>
                        <p><b>Name:</b> {product.name}</p>
                        <p><b>Excerpt:</b> {product.excerpt}</p>
                        <p><b>Price:</b> ${product.price}</p>
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductsPage;
