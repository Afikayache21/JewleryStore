import React, { createContext, useState } from 'react';

// Create the cart list context
export const CartContext = createContext();

// Create the CartContextProvider component
export const ShopContextProvider = ({ children }) => {
    // Define the state for the cart list
    const [shopList, setShopList] = useState([]);

    // Add items to the cart list
    const addToCart = (item) => {
        setShopList([...shopList, item]);
    };

    // Remove items from the cart list
    const removeFromShop = (itemToRemove) => {
        setShopList(shopList.filter((item) => item.id !== itemToRemove.id));
    };

    // Clear the cart list
    const clearShop = () => {
        setCartList([]);
    };

    // Provide the cart list and actions to the children components
    return (
        <CartContext.Provider
            value={{
                shopList,
                addToCart,
                removeFromShop,
                clearShop,
                setShopList
            }}
        >
            {children}
        </CartContext.Provider>
    );
};