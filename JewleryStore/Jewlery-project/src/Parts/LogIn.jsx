import React, { useState } from 'react';

const user={
    userEmail:'admin@gmail.com',
    userPassword:'admin123'
}

const LogIn = (props) => {
    const [user, setUser] = useState({ userEmail: '', userPassword: '' });
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleLogin = () => {
        if (user.userEmail === user.userEmail && user.userPassword === user.userPassword) {
            alert('Login Successful');
            props.history.push('/Shop');
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