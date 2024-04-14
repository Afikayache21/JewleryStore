import React, { useState, useContext } from 'react';
import Product from './Product';
import { CartContext } from './CartContext';

// Define initial products outside the component
const initialProducts = [
    { id: 1, type: 'ring', title: 'Product 1', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 100 },
    { id: 2, type: 'ring', title: 'Product 2', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 200 },
    { id: 3, type: 'earring', title: 'Product 3', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 300 },
    { id: 4, type: 'earring', title: 'Product 4', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 400 },
    { id: 5, type: 'necklace', title: 'Product 5', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 500 },
    { id: 6, type: 'necklace', title: 'Product 6', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 600 }
];

const Shop = () => {
    const { addToCart, cartList } = useContext(CartContext);

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
        console.log(item);
        addToCart(item);
        console.log(cartList); // Log the updated cart list
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
