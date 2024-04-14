import React, { createContext, useState } from 'react';

// Create the cart list context
export const CartContext = createContext();

// Create the CartContextProvider component
export const CartContextProvider = ({ children }) => {
    // Define the state for the cart list
    const [cartList, setCartList] = useState([]);

    // Add items to the cart list
    const addToCart = (item) => {
        setCartList([...cartList, item]);
    };

    // Remove items from the cart list
    const removeFromCart = (itemId) => {
        setCartList(cartList.filter((item) => item.id !== itemId));
    };

    // Clear the cart list
    const clearCart = () => {
        setCartList([]);
    };

    // Provide the cart list and actions to the children components
    return (
        <CartContext.Provider
            value={{
                cartList,
                addToCart,
                removeFromCart,
                clearCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};