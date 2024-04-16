import React, { useState, useContext } from 'react';
import Product from './Product';
import { CartContext } from './CartContext';
import {ShopContext} from './ShopContext'

// Define initial products outside the component


const Shop = () => {
    const { addToCart, cartList } = useContext(CartContext);
    const { shopList,setShopList } = useContext(ShopContext);
    console.log(shopList);
    const [products, setProducts] = useState(shopList);


    const handleSort = (option) => {
        if (option === 'all') {
            setProducts(initialProducts);
        } else {
            const sortedProducts = shopList.filter(product => product.type === option);
            setProducts(sortedProducts);
        }
    };

    const sendToCart = (item) => {
        const existingItem = cartList.find((product) => product.id === item.id);
        const productIndex = shopList.findIndex((product) => product.id === item.id);
        
        if (productIndex !== -1 && shopList[productIndex].quantity > 0) {
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartList.push({ ...item, quantity: 1 });
            }
            shopList[productIndex].quantity -= 1;
        } else {
            console.log(`There are no more ${item.title} in stock.`);
        }
    };
    
    

    return (
        <div className='shopCard'>
            <div className='sort'>
                <label htmlFor="sortOptions">Sort by:</label>
                <select style={{ borderRadius: '15px' }} id="sortOptions" onChange={(e) => handleSort(e.target.value)}>
                    <option value="all">All</option>
                    <option value="ring">Rings</option>
                    <option value="earring">Earrings</option>
                    <option value="necklace">Necklaces</option>
                </select>
            </div>
            <div className='shopItems'>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        sendToCart={sendToCart}
                        id={product.id}
                        title={product.title}
                        images={product.images}
                        subheader={product.subheader}
                        content={product.content}
                        price={product.price}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Shop;
