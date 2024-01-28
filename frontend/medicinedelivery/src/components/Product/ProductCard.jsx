import React from 'react';
import './ProductCard.css';


const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ProductCard;
