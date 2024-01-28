import React, { useState, useEffect } from 'react';
import ProductCard from '../Product/ProductCard';
import './ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch products from the backend API
        fetch('http://localhost:8080/api/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="product-list">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductList;