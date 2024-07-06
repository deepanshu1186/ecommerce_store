import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import ProductsCards from '../components/ProductsCards';
import Footer from '../components/Footer';


const LandingPage = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <ProductsCards />
            <Footer />
        </>
    );
};

export default LandingPage;
