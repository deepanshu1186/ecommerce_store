// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';
import axios from '../api/axiosConfig';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: localStorage.getItem('token'),
        user: null,
    });

    useEffect(() => {
        if (auth.token) {
            axios.get('/profile')
                .then(response => setAuth({ ...auth, user: response.data }))
                .catch(() => setAuth({ token: null, user: null }));
        }
    }, [auth.token]);

    const login = async (username, password) => {
        const response = await axios.post('/login', { username, password });
        localStorage.setItem('token', response.data.token);
        setAuth({ token: response.data.token, user: response.data.user });
    };

    const signup = async (username, password, email) => {
        const response = await axios.post('/signup', { username, password, email });
        localStorage.setItem('token', response.data.token);
        setAuth({ token: response.data.token, user: response.data.user });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({ token: null, user: null });
    };

    return (
        <AuthContext.Provider value={{ auth, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
