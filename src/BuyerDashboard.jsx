import React, { useState, useEffect } from 'react';
import ProductCarousel from './ProductCarousel';
import FilterBar from './FilterBar';
import Greeting from './Greeting';
import QuickAccess from './QuickAccess';
import products from './data';

function BuyerDashboard() {
    const [location, setLocation] = useState('All');
    const [category, setCategory] = useState('All');
    const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(products);
    }, []);

    const handleFilterChange = (newLocation, newCategory) => {
        setLocation(newLocation);
        setCategory(newCategory);
    };
    
    const filteredItems = items.filter(item => {
        if (location === 'All' && category === 'All') {
            return true;
        }
        const locationMatch = location === 'All' || item.location === location;
        const categoryMatch = category === 'All' || item.category === category;
        return locationMatch && categoryMatch;
    }).map(item => ({        
        ...item
    }))

    const recentlyAdded = filteredItems.slice(0,3)
    const popular = filteredItems.slice(3)

    return (
        <div className="bg-gray-100 p-8 m-4 text-center">
            <Greeting name="Alex" />
            <QuickAccess className="mb-8" />
            <h1 className="text-3xl font-bold mb-4">Buyer Dashboard</h1>
            <FilterBar onFilterChange={handleFilterChange} />
            <div className="mb-8">
                <ProductCarousel title="Recently Added" items={recentlyAdded} />
            </div>
            <div className="mb-8">
                <ProductCarousel title="Popular Near You" items={popular} />
            </div>
        </div>
    );
}

export default BuyerDashboard;