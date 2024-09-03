import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/v1/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchProducts}>Load Products</button>
      {loading && <div>Loading Products</div>}
      <ul>
        {products.map((product) => (
          <div key={product._id}>
            {product.name} - ${product.price}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;