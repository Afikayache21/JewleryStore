import React, { useState, useContext } from 'react';
import Product from './Product';
import { CartContext } from './CartContext';
import {ShopContext} from './ShopContext'

// Define initial products outside the component
const initialProducts = [
    { id: 1, type: 'ring', title: 'Product 1', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 100, quantity: 10 },
    { id: 2, type: 'ring', title: 'Product 2', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 200 , quantity: 10},
    { id: 3, type: 'earring', title: 'Product 3', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 300 , quantity: 10},
    { id: 4, type: 'earring', title: 'Product 4', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 400 , quantity: 10},
    { id: 5, type: 'necklace', title: 'Product 5', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 500 , quantity: 10},
    { id: 6, type: 'necklace', title: 'Product 6', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 600, quantity: 10 }
];

const Shop = () => {
    const { addToCart, cartList } = useContext(CartContext);
    const { setShopList } = useContext(ShopContext);
    setShopList(initialProducts);

    const [products, setProducts] = useState(initialProducts);

    const handleSort = (option) => {
        if (option === 'all') {
            setProducts(initialProducts);
        } else {
            const sortedProducts = initialProducts.filter(product => product.type === option);
            setProducts(sortedProducts);
        }
    };

    const sendToCart = (item) => {
        const existingItem = cartList.find((product) => product.id === item.id);
        const productIndex = initialProducts.findIndex((product) => product.id === item.id);
        
        if (productIndex !== -1 && initialProducts[productIndex].quantity > 0) {
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cartList.push({ ...item, quantity: 1 });
            }
            initialProducts[productIndex].quantity -= 1;
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
