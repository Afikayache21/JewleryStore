import React, { useState, useContext } from 'react';
import { ShopContext } from './ShopContext';
import { AdminContext } from './AdminContext';

function AddItemCard() {
    const { shopList, setShopList, addToShop, removeFromShop, clearShop } = useContext(ShopContext);
    const adminContext = useContext(AdminContext);
    const { admin } = adminContext;

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

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        const imagePromises = files.map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (event) => {
                    resolve(event.target.result);
                };
                reader.onerror = (error) => {
                    reject(error);
                };
                reader.readAsDataURL(file);
            });
        });

        Promise.all(imagePromises)
            .then(base64Images => {
                setFormData({ ...formData, images: [...formData.images, ...base64Images] });
            })
            .catch(error => {
                console.error('Error reading file:', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
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

    if (admin.username === 'admin@gmail.com' && admin.password === 'admin123') {
        return (
            <div>
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
                                onChange={handleFileChange}
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
    } else {
        return <h1 style={{ textAlign: 'center', paddingTop: '10%' }}>Error</h1>;
    }
}

export default AddItemCard;
