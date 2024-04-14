import React, { useState,useContext } from 'react';
import Product from './Product';
import { CartContext } from './CartContext';

const Shop = () => {

    const { addToCart ,cartList} = useContext(CartContext);

    const [sortedList, setSortedList] = useState([
        { id: 1, title: 'Product 1', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 100 },
        { id: 2, title: 'Product 2', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 200 },
        { id: 3, title: 'Product 3', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 300 },
        { id: 4, title: 'Product 4', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 400 },
        { id: 5, title: 'Product 5', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 500 },
        { id: 6, title: 'Product 6', images: ['/pic-2.jpg', '/pic-3.jpg'], subheader: 'subheader here', content: 'All the content going to be here', price: 600 }]);

    const handleSort =  (option) => {
        // Sort the itemsList based on the selected option
        // and update the sortedList state
        // You can use any sorting algorithm or library here
        const sortedItemsList = [...sortedList];

        if (option === 'price') {
            sortedItemsList.sort((a, b) => a.price - b.price);
        } else if (option === 'name') {
            sortedItemsList.sort((a, b) => a.name.localeCompare(b.name));
        }

        setSortedList(sortedItemsList);

    };
    const sendToCart = async (item) => {
        console.log(item);
        // Add the item to the cart
        await addToCart(item);
        console.log(cartList);


        

    }

    return (
        <div className='shopCard'>
            <div className='sort'>
                <label htmlFor="sortOptions">Sort by:</label>
                <select style={{ borderRadius: '15px' }} id="sortOptions" >
                    <option value="price">Price</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <div className='shopItems'>
                {sortedList?.map((item) => (
                    <Product
                        key={item.id}
                        sendToCart={sendToCart}
                        id={item.id}
                        title={item.title}
                        images={item.images}
                        subheader={item.subheader}
                        content={item.content}
                        price={item.price} />
                ))}
            </div>
        </div>
    );
};

export default Shop;