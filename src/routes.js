// src/routes.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
// import SignupPage from './pages/SignupPage';
// import DashboardPage from './pages/DashboardPage';
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
                <Route path="/login" element={<LoginPage />} />
                {/* <Route path="/signup" element={<SignupPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/create-product" element={<ProductFormPage />} />
                <Route path="/products" element={<ProductListPage />} />
                <Route path="/orders" element={<OrderListPage />} /> */}
            </Routes>
        </AuthProvider>
    </Router>
);

export default AppRoutes;
