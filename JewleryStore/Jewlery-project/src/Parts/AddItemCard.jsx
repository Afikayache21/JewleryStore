import React, { useState, useContext } from 'react';
import { ShopContext } from './ShopContext';
function AddItemCard() {
    const { shopList, setShopList, addToShop, removeFromShop, clearShop } = useContext(ShopContext);
    const [formData, setFormData] = useState({
        id: '',
        type: '',
        title: '',
        images: [],
        subheader: '',
        content: '',
        price: 0,
        quantity: 0
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === "images") {
            setFormData({ ...formData, [name]: [...formData.images, value] });
        }
        else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const findEmptySpot = () => {
        for (let i = 0; i < shopList.length; i++) {
            if (shopList[i].quantity === 0) {
                return i;
            }
        }
        return -1;
    };

    const handleSubmit = () => {
        console.log(formData);
        
        addToShop(formData);
        setFormData({
            id: '',
            type: '',
            title: '',
            images: [],
            subheader: '',
            content: '',
            price: 0,
            quantity: 0
        });
    };

    return (
    <div >
        <h1 style={{ marginBottom:'3%',color:'white'}}>Add Item</h1>
        <div className='AddItemContainer'>
            <label style={{paddingTop:'4%'}}>
                <select placeholder='Quantity' style={{ borderRadius: '15px' }} name="type" onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="ring">Rings</option>
                    <option value="earring">Earrings</option>
                    <option value="necklace">Necklaces</option>
                </select>
            </label>
            <br />
            <label>

                <input placeholder='Title' type="text" name="title" value={formData.title || ''} onChange={handleChange} />
            </label>
            <br />
            <label style={{ display: 'flex', justifyContent: 'center' }}>
                <div style={{ position: 'relative', overflow: 'hidden', maxWidth: '100%' }}>
                    <input
                        type="file"
                        accept="image/jpeg, image/png, image/jpg"
                        multiple
                        onChange={handleChange}
                        style={{

                            position: 'absolute',
                            top: 0,
                            right: 0,
                            margin: 0,
                            padding: 0,
                            fontSize: '20px',
                            cursor: 'pointer',
                            opacity: 0,
                            filter: 'alpha(opacity=0)',
                            height: '100%',
                            width: '100%',
                        }}
                    />
                    <button>Choose files</button>
                </div>
            </label>
            <br />
            <br />
            <label>

                <input placeholder='Subheader' type="text" name="subheader" value={formData.subheader || ''} onChange={handleChange} />
            </label>
            <br />
            <label>

                <input placeholder='Content' type="text" name="content" value={formData.content || ''} onChange={handleChange} />
            </label>
            <br />
            <label>
                Price:<br />
                <input placeholder={formData.price} type="number" name="price" value={formData.price} onChange={handleChange} />
            </label>
            <br />
            <label>
                Quantity:<br />
                <input placeholder={formData.quantity} type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
            </label>
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
        </div>
    );
}


export default AddItemCard;
