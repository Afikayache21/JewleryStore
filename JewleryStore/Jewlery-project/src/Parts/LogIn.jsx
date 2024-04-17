import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AdminContext } from './AdminContext';

const LogIn = () => {
    const { admin, setAdmin } = useContext(AdminContext); // Destructure admin and setAdmin directly

    const navigate = useNavigate();

    const handleChange = (e) => {
        setAdmin({ ...admin, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        if (admin.username === 'admin@gmail.com' && admin.password === 'admin123') {
            alert('Login Successful');
            navigate('/AdminPage', { replace: true });
        } else {
            alert('Login Failed');
        }
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <div className='formContainer'>
                <h2 style={{ color: "white" }}>Login</h2>
                <div style={{ padding: '2rem' }}>
                    <input
                        type="text"
                        name='username'
                        placeholder="Username"
                        value={admin.username}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="password"
                        name='password'
                        placeholder="Password"
                        value={admin.password}
                        onChange={handleChange}
                    />
                    <br />
                    <button style={{ marginTop: '2rem' }} onClick={handleLogin}>Log In</button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
