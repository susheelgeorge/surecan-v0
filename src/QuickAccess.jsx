import React, { useState, useEffect } from 'react';

function QuickAccess() {
    const [favoriteVendors, setFavoriteVendors] = useState([]);
    const [frequentPurchases, setFrequentPurchases] = useState([]);
    const [newVendorName, setNewVendorName] = useState('');
    const [newPurchaseName, setNewPurchaseName] = useState('');


  const removeItem = (list, itemId, setList) => {
    const updatedList = list.filter(item => item.id !== itemId);
    setList(updatedList);
  };

    const addItem = (list, setList, newItemName, setNewItemName) => {
        const newItem = { id: list.length > 0 ? Math.max(...list.map(item => item.id)) + 1 : 1, name: newItemName };
        setList([...list, newItem]);
        setNewItemName('');
    };
  const handleItemClick = (item) => {
      console.log("Clicked item:", item.name);
  };

  useEffect(() => {
    // Load data from localStorage on mount
    const storedVendors = localStorage.getItem('favoriteVendors');
    const storedPurchases = localStorage.getItem('frequentPurchases');
        if (storedVendors) {
            setFavoriteVendors(JSON.parse(storedVendors));
        } else {
            setFavoriteVendors([
                { id: 1, name: "Green Acres Farm" },
                { id: 2, name: "Dairy Delight" },
                { id: 3, name: "Baker's Basket" },
            ]);
        }
        if (storedPurchases) {
            setFrequentPurchases(JSON.parse(storedPurchases));
        } else {
        setFrequentPurchases(
        storedVendors ? JSON.parse(storedVendors) : [
        storedPurchases ? JSON.parse(storedPurchases) : [
            { id: 1, name: "Organic Eggs" },
            { id: 2, name: "Whole Wheat Bread" },
            { id: 3, name: "Fresh Milk" },
        ]
    );
  }, []);

  useEffect(() => {
    localStorage.setItem('favoriteVendors', JSON.stringify(favoriteVendors));
    localStorage.setItem('frequentPurchases', JSON.stringify(frequentPurchases));
  }, [favoriteVendors, frequentPurchases]); 
  return (
    <div className="flex space-x-4 mb-4">
      
        
        <div className="bg-white border border-gray-300 p-4 rounded-md w-1/2">
            <h3 className="font-semibold mb-2">Favorite Vendors</h3>
            <div className="mb-2">
                <input type="text" value={newVendorName} onChange={(e) => setNewVendorName(e.target.value)} placeholder="New Vendor Name" className="border border-gray-300 p-2 mr-2"/>
                <button onClick={() => addItem(favoriteVendors, setFavoriteVendors, newVendorName, setNewVendorName)} className="bg-blue-500 text-white p-2 rounded">Add</button>
            </div>
            
            <ul>
                {favoriteVendors.map(vendor => (
                    <li key={vendor.id} className="flex justify-between items-center">
                        <button onClick={() => handleItemClick(vendor)} className="hover:underline">{vendor.name}</button>
                        <button onClick={() => removeItem(favoriteVendors, vendor.id, setFavoriteVendors)} className="text-red-500">Remove</button>
      <div className="bg-white border border-gray-300 p-4 rounded-md w-1/2">
        <h3 className="font-semibold mb-2">Favorite Vendors</h3>
        <ul>
          {favoriteVendors.map(vendor => (
            <li key={vendor.id} className="flex justify-between items-center">
               <button onClick={() => handleItemClick(vendor)} className="hover:underline">
                        {vendor.name}
                    </button>
              <button onClick={() => removeItem(favoriteVendors, vendor.id, setFavoriteVendors)} className="text-red-500">
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="bg-white border border-gray-300 p-4 rounded-md w-1/2">
      <h3 className="font-semibold mb-2">Frequent Purchases</h3>
            <div className="mb-2">
                <input type="text" value={newPurchaseName} onChange={(e) => setNewPurchaseName(e.target.value)} placeholder="New Purchase Name" className="border border-gray-300 p-2 mr-2"/>
                <button onClick={() => addItem(frequentPurchases, setFrequentPurchases, newPurchaseName, setNewPurchaseName)} className="bg-blue-500 text-white p-2 rounded">Add</button>
            </div>
            <ul>
                {frequentPurchases.map(purchase => (
                    <li key={purchase.id} className="flex justify-between items-center">
                        <button onClick={() => handleItemClick(purchase)} className="hover:underline">{purchase.name}</button>
                        <button onClick={() => removeItem(frequentPurchases, purchase.id, setFrequentPurchases)} className="text-red-500">Remove</button>
                    </li>
                ))}
            </ul>
            </div>
    </div>
  );
}

export default QuickAccess;
