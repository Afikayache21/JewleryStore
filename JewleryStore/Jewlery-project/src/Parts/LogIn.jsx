import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LogIn = () => {
    const [user, setUser] = useState({ userEmail: '', userPassword: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        if (user.userEmail === 'admin@gmail.com' && user.userPassword === 'admin123') {
            alert('Login Successful');
            navigate('/AdminPage', { replace: true }); // Redirect to '/Shop' upon successful login
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
                        name='userEmail'
                        placeholder="Username"
                        value={user.userEmail}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type="password"
                        name='userPassword'
                        placeholder="Password"
                        value={user.userPassword}
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
