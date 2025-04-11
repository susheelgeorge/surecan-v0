import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from './data';

function ProductDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return <div>Product not found!</div>;
    }

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <div className="p-8">
            <button
                onClick={handleGoBack}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            >
                Back
            </button>
            <div className="mt-8 bg-gray-100 p-8 rounded-md shadow-md">
                <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
                <p className="text-gray-700 mb-2">Description: {product.description}</p>
                <p className="text-gray-700 mb-2">Price: ${product.price.toFixed(2)}</p>
                <p className="text-gray-700 mb-2">Location: {product.location}</p>
                <p className="text-gray-700">Category: {product.category}</p>
            </div>
        </div>
    );
}

export default ProductDetails;