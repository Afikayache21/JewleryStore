import React, { createContext, useState } from 'react';

// Create the cart list context
export const ShopContext = createContext();

// Create the CartContextProvider component
export const ShopContextProvider = ({ children }) => {
    // Define the state for the cart list
    const [shopList, setShopList] = useState([
        { id: 1, type: 'ring', title: 'Heart Ring', images: ['/Rings/heart_ring1.jpg', '/Rings/heart_ring2.jpg', '/Rings/heart_ring3.jpg'], subheader: 'Options: Gold, Silver, Rose Gold', content: 'All the content going to be here', price: 100, quantity: 10 },
        { id: 2, type: 'ring', title: 'Princess Ring', images: ['/Rings/princess_ring1.jpg', '/Rings/princess_ring2.jpg', '/Rings/princess_ring3.jpg'], subheader: 'Options: Gold, Silver, Rose Gold', content: 'All the content going to be here', price: 200 , quantity: 10},
        { id: 3, type: 'ring', title: 'Sparkle Ring', images: ['/Rings/sparkle_ring1.jpg', '/Rings/sparkle_ring2.jpg', '/Rings/sparkle_ring3.jpg'], subheader: 'Options: Gold, Silver, Rose Gold', content: 'All the content going to be here', price: 300 , quantity: 10},
        { id: 4, type: 'ring', title: 'Wishbone Ring', images: ['/Rings/wishbone_ring3.jpg', '/Rings/wishbone_ring1.jpg', '/Rings/wishbone_ring2.jpg'], subheader: 'Options: Gold, Silver, Rose Gold', content: 'All the content going to be here', price: 400 , quantity: 10},
        { id: 5, type: 'necklace', title: 'Key Necklace', images: ['/Necklace/key_neck1.jpg', '/Necklace/key_neck2.jpg', '/Necklace/key_neck3.jpg'], subheader: 'Options: Gold, Silver, Diamonds', content: 'A perfect gift for a loved one. Symbol of love, trust and loyalty.', price: 500 , quantity: 10},
        { id: 6, type: 'necklace', title: 'Hamsa Necklace', images: ['/Necklace/hamsa_neck2.jpg','/Necklace/hamsa_neck1.jpg',  '/Necklace/hamsa_neck3.jpg'], subheader: 'Options: Gold, Silver, Diamonds', content: 'Symbol of life, kindness and creativity.', price: 600, quantity: 10 },
        { id: 7, type: 'necklace', title: 'Hai Necklace', images: ['/Necklace/hai_neck1.jpg', '/Necklace/hai_neck2.jpg'], subheader: 'Options: Gold, Silver, Diamonds ', content: 'Represents life, freedom, and hope.', price: 700, quantity: 10 },
        { id: 8, type: 'necklace', title: 'Diamond Necklace', images: ['/Necklace/diamond_neck1.jpg', '/Necklace/diamond_neck2.jpg'], subheader: 'Options: Gold,silver, Diamonds ', content: 'A classy choice. Shows grace, elegance, and beauty.', price: 700, quantity: 10 },
    ]);

    // Add items to the cart list
    const addToShop = (item) => {
        setShopList([...shopList , item]);
    };

    // Remove items from the cart list
    const removeFromShop = (itemToRemove) => {
        setShopList(shopList.filter((item) => item.id !== itemToRemove.id));
    };

    // Clear the cart list
    const clearShop = () => {
        setShopList([]);
    };

    // Provide the cart list and actions to the children components
    return (
        <ShopContext.Provider
            value={{
                shopList,
                addToShop,
                removeFromShop,
                clearShop,
                setShopList
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};