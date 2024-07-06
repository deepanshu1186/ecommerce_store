import React, { useState } from 'react';

function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <header className="bg-light">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a className="navbar-brand" href="/">
                        <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}logo.png`} alt="CoolGadgets Logo" width="120" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/"><i className="fas fa-home"></i> Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/products"><i className="fas fa-gift"></i> Products</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/cart">
                                    <i className="fas fa-shopping-cart"></i> Cart
                                </a>
                            </li>
                            {isLoggedIn ? (
                                <li className="nav-item dropdown">
                                    <button className="btn nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="fas fa-user"></i> Profile
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/profile">Profile</a></li>
                                        <li><a className="dropdown-item" href="/favourites">Favourites</a></li>
                                        <li><a className="dropdown-item" href="/orders">Orders</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="/signout">SignOut</a></li>
                                    </ul>
                                </li>
                            ) : (
                                <li className="nav-item">
                                    <a className="nav-link" href="/login"><i className="fas fa-user"></i> Login</a>
                                </li>
                            )}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
