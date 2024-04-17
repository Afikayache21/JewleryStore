import React, { createContext, useState } from 'react';

// Create the cart list context
export const ShopContext = createContext();

// Create the CartContextProvider component
export const ShopContextProvider = ({ children }) => {
    // Define the state for the cart list
    const [shopList, setShopList] = useState([
        { id: 1, type: 'ring', title: 'Heart Ring', images: ['/Rings/heart_ring1.jpg', '/Rings/heart_ring2.jpg', '/Rings/heart_ring3.jpg'], subheader: 'Options: Gold, Silver, Rose Gold',
        content: 'A delicate embrace of metal, cradling the essence of affection within its curves.', price: 100, quantity: 10 , isEdited: false},
        { id: 2, type: 'ring', title: 'Princess Ring', images: ['/Rings/princess_ring1.jpg', '/Rings/princess_ring2.jpg', '/Rings/princess_ring3.jpg'], subheader: 'Options: Gold, Silver, Rose Gold',
        content: 'A regal adornment, fit for royalty, sparkling with the majesty of a thousand dreams.', price: 200 , quantity: 10, isEdited: false},
        { id: 3, type: 'ring', title: 'Sparkle Ring', images: ['/Rings/sparkle_ring1.jpg', '/Rings/sparkle_ring2.jpg', '/Rings/sparkle_ring3.jpg'], subheader: 'Options: Gold, Silver, Rose Gold',
        content: 'A luminous dance of light, captivating with every flicker, a beacon of brilliance on the finger.', price: 300 , quantity: 10, isEdited: false},
        { id: 4, type: 'ring', title: 'Wishbone Ring', images: ['/Rings/wishbone_ring3.jpg', '/Rings/wishbone_ring1.jpg', '/Rings/wishbone_ring2.jpg'], subheader: 'Options: Gold, Silver, Rose Gold',
        content: 'A promise of dreams, the wishbone ring cradles hope in its graceful arc.', price: 400 , quantity: 10, isEdited: false},
        { id: 5, type: 'necklace', title: 'Key Necklace', images: ['/Necklace/key_neck1.jpg', '/Necklace/key_neck2.jpg', '/Necklace/key_neck3.jpg'], subheader: 'Options: Gold, Silver, Diamonds',
        content: 'Unlocking secrets of the heart, the key necklace symbolizes the power of loves journey.', price: 500 , quantity: 10, isEdited: false},
        { id: 6, type: 'necklace', title: 'Hamsa Necklace', images: ['/Necklace/hamsa_neck2.jpg','/Necklace/hamsa_neck1.jpg',  '/Necklace/hamsa_neck3.jpg'], subheader: 'Options: Gold, Silver, Diamonds',
        content: 'Guardian of fortune, the Hamsa necklace wards off evil with timeless elegance.', price: 600, quantity: 10, isEditied: false },
        { id: 7, type: 'necklace', title: 'Hai Necklace', images: ['/Necklace/hai_neck1.jpg', '/Necklace/hai_neck2.jpg'], subheader: 'Options: Gold, Silver, Diamonds ',
        content: 'Worn with pride, the hai necklace embodies the essence of lifes vitality and enduring spirit.', price: 700, quantity: 10, isEdited: false },
        { id: 8, type: 'necklace', title: 'Diamond Necklace', images: ['/Necklace/diamond_neck1.jpg', '/Necklace/diamond_neck2.jpg'], subheader: 'Options: Gold,silver, Diamonds ',
        content: 'A symphony of sparkle, the diamond necklace radiates timeless elegance.', price: 700, quantity: 10 , isEdited: false},
        { id: 9, type: 'earring', title: 'Chain Earrings' , images: ['/Earrings/chain_ear1.jpg', '/Earrings/chain_ear2.jpg', '/Earrings/chain_ear3.jpg'], subheader: 'Options: Gold, Silver, Rose Gold',
        content: 'The chain earrings dance with every movement, with a subtle touch of sophistication.', price: 200, quantity: 10, isEdited: false },
        { id: 10, type: 'earring', title: 'Crystal Earrings' , images: ['/Earrings/crystal_ear1.jpg', '/Earrings/crystal_ear2.jpg', '/Earrings/crystal_ear3.jpg'], subheader: 'Options: Gold, Silver, Rose Gold',
        content: 'Crystal earrings shimmer softly, adding a touch of elegance to every look.', price: 400, quantity: 10 , isEdited: false},
        { id: 11, type: 'earring', title: 'Huggie Earrings' , images: ['/Earrings/huggie_ear1.jpg', '/Earrings/huggie_ear2.jpg', '/Earrings/huggie_ear3.jpg'], subheader: 'Options: Gold, Silver, Rose Gold',
        content: 'Huggie earrings embrace the ear with subtle elegance, a delicate accent for everyday charm.', price: 300, quantity: 10 , isEdited: false},
        { id: 12, type: 'earring', title: 'Tear Earrings' , images: ['/Earrings/tear_ear1.jpg', '/Earrings/tear_ear2.jpg', '/Earrings/tear_ear3'], subheader: 'Options: Gold, Silver, Rose Gold',
        content: 'Tear earrings cascade with grace, capturing emotions in a shimmering descent.', price: 100, quantity: 10 , isEdited: false},
    ]);

    // Add items to the cart list
    const addToShop = (item) => {
        setShopList([...shopList, item]);
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