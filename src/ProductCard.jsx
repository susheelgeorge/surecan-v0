import React from 'react';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
        <Link to={`/product/${product.id}`} className="block">
            <div className="bg-gray-100 p-4 rounded-md shadow-md">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">Description: {product.description}</p>
                <p className="text-gray-700 mb-2">Price: ${product.price.toFixed(2)}</p>
                <p className="text-gray-700 mb-2">Location: {product.location}</p>
                <p className="text-gray-700">Category: {product.category}</p>
            </div>
        </Link>
    );
}

export default ProductCard;