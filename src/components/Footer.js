import React from 'react';

function Footer() {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}logo.png`} alt="CoolGadgets Logo" className="mb-2" width="100" />
                        <p>Discover the Future <br /> With CoolGadgets!</p>
                    </div>
                    <div className="col-md-3">
                        <h3>Navigation</h3>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-decoration-none text-light">Home</a></li>
                            <li><a href="/products.html" className="text-decoration-none text-light">Products</a></li>
                            <li><a href="#contact" className="text-decoration-none text-light">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Useful Links</h3>
                        <ul className="list-unstyled">
                            <li><a href="/coupons" className="text-decoration-none text-light">Coupons</a></li>
                            <li><a href="/blog" className="text-decoration-none text-light">Blog Post</a></li>
                            <li><a href="/return-policy" className="text-decoration-none text-light">Return Policy</a></li>
                            <li><a href="/affiliate" className="text-decoration-none text-light">Join Affiliate</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3>Follow Us</h3>
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com" className="text-decoration-none text-light" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                            <li><a href="https://www.twitter.com" className="text-decoration-none text-light" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                            <li><a href="https://www.instagram.com" className="text-decoration-none text-light" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                            <li><a href="https://www.youtube.com" className="text-decoration-none text-light" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="my-4" />
                <div className="text-center">&copy; Copyright {currentYear} - CoolGadgets Store</div>
            </div>
        </footer>
    );
}

export default Footer;
