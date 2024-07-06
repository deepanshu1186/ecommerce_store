import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function CartPage() {
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (e) => {
        const newQuantity = e.target.value;
        setQuantity(newQuantity)
    }
    return (
        <>
            <Navbar />
            <header className="py-3">
                <div className="container">
                    <h1>Your Shopping Cart</h1>
                </div>
            </header>

            <section className="container my-5">
                <div className="row">
                    <div className="col-md-8">

                        <div className="cart-item">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}product-1.jpg`} className="img-fluid" alt="Product" />
                                </div>
                                <div className="col-md-5">
                                    <h4>Virtual Reality Glasses</h4>
                                    <p>$299.00</p>
                                </div>
                                <div className="col-md-2">
                                    <input type="number" className="form-control" value={quantity} onChange={handleQuantityChange} />
                                </div>
                                <div className="col-md-2">
                                    <button className="btn btn-danger">Remove</button>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="border p-3 mb-3">
                            <h3 className="mb-3">Cart Summary</h3>
                            <div className="d-flex justify-content-between">
                                <span>Subtotal</span>
                                <span>$299.00</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Tax</span>
                                <span>$23.92</span>
                            </div>
                            <div className="d-flex justify-content-between">
                                <span>Total</span>
                                <span>$322.92</span>
                            </div>
                            <button className="btn btn-warning w-100 mt-3">Proceed to Checkout</button>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </>
    )
}

export default CartPage