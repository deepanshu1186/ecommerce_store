// src/pages/LandingPage.js
import React from 'react';
import '../assets/css/LandingPage.css';

const LandingPage = () => {
    return (
        <div className="landing-page">
            <header className="header">
                <nav className="navbar">
                    <a href="/" className="logo">TaTa Sampann</a>
                    <ul className="nav-links">
                        <li><a href="#categories">Categories</a></li>
                        <li><a href="#featured">Featured</a></li>
                        <li><a href="#testimonials">Testimonials</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>

            <main className="main-content">
                <section className="hero">
                    <h1>Welcome to E-Shop</h1>
                    <p>Discover the best products at unbeatable prices.</p>
                    <button className="cta-button" onClick={() => window.location.href = "/shop"}>Shop Now</button>
                </section>

                <section id="categories" className="categories">
                    <h2>Shop by Category</h2>
                    <div className="category-list">
                        <div className="category-item">
                            <img src="/images/category1.jpg" alt="Category 1" />
                            <p>Electronics</p>
                        </div>
                        <div className="category-item">
                            <img src="/images/category2.jpg" alt="Category 2" />
                            <p>Fashion</p>
                        </div>
                        <div className="category-item">
                            <img src="/images/category3.jpg" alt="Category 3" />
                            <p>Home & Garden</p>
                        </div>
                    </div>
                </section>

                <section id="featured" className="featured">
                    <h2>Featured Products</h2>
                    <div className="product-list">
                        <div className="product-item">
                            <img src="/images/product1.jpg" alt="Product 1" />
                            <p>Product 1</p>
                            <p>$29.99</p>
                        </div>
                        <div className="product-item">
                            <img src="/images/product2.jpg" alt="Product 2" />
                            <p>Product 2</p>
                            <p>$49.99</p>
                        </div>
                        <div className="product-item">
                            <img src="/images/product3.jpg" alt="Product 3" />
                            <p>Product 3</p>
                            <p>$19.99</p>
                        </div>
                    </div>
                </section>

                <section id="testimonials" className="testimonials">
                    <h2>What Our Customers Say</h2>
                    <div className="testimonial-list">
                        <div className="testimonial-item">
                            <p>"Great service and fast shipping!"</p>
                            <p>- John Doe</p>
                        </div>
                        <div className="testimonial-item">
                            <p>"High quality products at amazing prices."</p>
                            <p>- Jane Smith</p>
                        </div>
                        <div className="testimonial-item">
                            <p>"I love shopping here, always find what I need."</p>
                            <p>- Bob Johnson</p>
                        </div>
                    </div>
                </section>

                <section id="contact" className="contact">
                    <h2>Contact Us</h2>
                    <p>Have questions? Reach out to us via email at support@eshop.com or call us at (123) 456-7890.</p>
                </section>
            </main>

            <footer className="footer">
                <p>&copy; 2024 E-Shop. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default LandingPage;
