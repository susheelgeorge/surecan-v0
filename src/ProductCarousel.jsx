import React from 'react';
import ProductCard from './ProductCard';

function ProductCarousel({ title, items }) {
    return (
        <div>
            <h2 className="text-2xl font-semibold mb-4">{title}</h2>
            <div className="flex overflow-x-auto space-x-4">
                {items.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
      </div>
    );
}

export default ProductCarousel;