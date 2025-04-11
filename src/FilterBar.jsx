import React, { useState } from 'react';

function FilterBar({ onFilterChange }) {
    const [location, setLocation] = useState('All');
    const [category, setCategory] = useState('All');

    const handleLocationChange = (event) => {
        const newLocation = event.target.value;
        setLocation(newLocation);
        onFilterChange(newLocation, category);
    };

    const handleCategoryChange = (event) => {
        const newCategory = event.target.value;
        setCategory(newCategory);
        onFilterChange(location, newCategory);
    };

    return (
        <div className="bg-gray-200 p-4 mb-4">
            <div className="flex space-x-4">
                <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                        Location
                    </label>
                    <select
                        id="location"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        value={location}
                        onChange={handleLocationChange}
                    >
                        <option value="All">All</option>
                        <option value="New York">New York</option>
                        <option value="Los Angeles">Los Angeles</option>
                        <option value="Chicago">Chicago</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                        Category
                    </label>
                    <select
                        id="category"
                        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                        value={category}
                        onChange={handleCategoryChange}
                    >
                        <option value="All">All</option>
                        <option value="Fruits">Fruits</option>
                        <option value="Vegetables">Vegetables</option>
                        <option value="Grains">Grains</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default FilterBar;