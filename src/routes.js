// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
// import SignupPage from './pages/SignupPage';
// import ProfilePage from './pages/ProfilePage';
// import ProductFormPage from './pages/ProductFormPage';
// import ProductListPage from './pages/ProductListPage';
// import OrderListPage from './pages/OrderListPage';
//import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';

const AppRoutes = () => (
    <Router>
        <AuthProvider>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                {/* <Route path="/signup" element={<SignupPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/create-product" element={<ProductFormPage />} />
                <Route path="/products" element={<ProductListPage />} />
                <Route path="/orders" element={<OrderListPage />} /> */}
            </Routes>
        </AuthProvider>
    </Router>
);

export default AppRoutes;
