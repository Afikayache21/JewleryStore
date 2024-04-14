import React, { useState } from 'react';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([
        { name: 'Item 1', price: 10 },
        { name: 'Item 2', price: 15 },
        { name: 'Item 3', price: 12 },
        { name: 'Item 4', price: 8 },
        { name: 'Item 5', price: 20 },
        { name: 'Item 6', price: 18 },
        { name: 'Item 7', price: 14 },
        { name: 'Item 8', price: 9 },
        { name: 'Item 9', price: 16 },
        { name: 'Item 10', price: 11 },
    ]);

  

    const [editingIndex, setEditingIndex] = useState(-1);

    const handlePriceChange = (index, newPrice) => {
        const updatedMenuItems = [...menuItems];
        updatedMenuItems[index].price = newPrice;
        setMenuItems(updatedMenuItems);
    };

    const handleEditClick = (index) => {
        setEditingIndex(index);
    };

    const handleSaveClick = () => {
        setEditingIndex(-1);
    };

    return (
        <div>
            <h1>Restaurant Menu</h1>
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${editingIndex === index ? (
                            <input 
                                type="number"
                                value={item.price}
                                onChange={(e) => handlePriceChange(index, e.target.value)}
                            />
                        ) : (
                            <span>{item.price}</span>
                        )}
                        {editingIndex === index ? (
                            <button onClick={handleSaveClick}>Save</button>
                        ) : (
                            <button onClick={() => handleEditClick(index)}>Edit</button>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;