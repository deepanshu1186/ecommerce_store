// src/pages/LoginPage.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const LoginPage = () => {
    const { login } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(username, password);
            // redirect to dashboard or other page
        } catch (error) {
            console.error('Failed to login:', error);
        }
    };

    console.log('LoginPage rendered'); // Add this line

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                required
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginPage;
