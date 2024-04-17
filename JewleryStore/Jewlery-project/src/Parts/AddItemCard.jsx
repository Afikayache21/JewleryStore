import React, { useState, useContext } from 'react';
import { ShopContext } from './ShopContext'; // Importing ShopContext for managing shop-related data
import { AdminContext } from './AdminContext'; // Importing AdminContext for managing admin-related data

function AddItemCard() {
    // Accessing shop-related context
    const { shopList, setShopList, addToShop, removeFromShop, clearShop } = useContext(ShopContext);
    // Accessing admin-related context
    const adminContext = useContext(AdminContext);
    const { admin } = adminContext;

    // Setting up state for form data
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

    // Function to handle file input change
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

        // Handling multiple file uploads asynchronously
        Promise.all(imagePromises)
            .then(base64Images => {
                setFormData({ ...formData, images: [...formData.images, ...base64Images] });
            })
            .catch(error => {
                console.error('Error reading file:', error);
            });
    };

    // Function to handle form input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = () => {
        console.log(formData);
        
        // Adding item to the shop
        addToShop(formData);
        // Resetting form data after submission
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

    // Rendering form for adding items if the user is admin
    if (admin.username === 'admin@gmail.com' && admin.password === 'admin123') {
        return (
            <div>
                <h1 style={{ marginBottom:'3%',color:'white'}}>Add Item</h1>
                <div className='AddItemContainer'>
                    {/* Dropdown for selecting item type */}
                    <label style={{paddingTop:'4%'}}>
                        <select placeholder='Quantity' style={{ borderRadius: '15px' }} name="type" onChange={handleChange}>
                            <option value="all">All</option>
                            <option value="ring">Rings</option>
                            <option value="earring">Earrings</option>
                            <option value="necklace">Necklaces</option>
                        </select>
                    </label>
                    <br />
                    {/* Input field for item title */}
                    <label>
                        <input placeholder='Title' type="text" name="title" value={formData.title || ''} onChange={handleChange} />
                    </label>
                    <br />
                    {/* File input for uploading item images */}
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
                    {/* Input field for item subheader */}
                    <label>
                        <input placeholder='Subheader' type="text" name="subheader" value={formData.subheader || ''} onChange={handleChange} />
                    </label>
                    <br />
                    {/* Input field for item content */}
                    <label>
                        <input placeholder='Content' type="text" name="content" value={formData.content || ''} onChange={handleChange} />
                    </label>
                    <br />
                    {/* Input field for item price */}
                    <label>
                        Price:<br />
                        <input placeholder={formData.price} type="number" name="price" value={formData.price} onChange={handleChange} />
                    </label>
                    <br />
                    {/* Input field for item quantity */}
                    <label>
                        Quantity:<br />
                        <input placeholder={formData.quantity} type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
                    </label>
                    <br />
                    {/* Button to submit the form */}
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        );
    } else {
        // Rendering an error message if the user is not an admin
        return <h1 style={{ textAlign: 'center', paddingTop: '10%' }}>Error</h1>;
    }
}
export default AddItemCard;
