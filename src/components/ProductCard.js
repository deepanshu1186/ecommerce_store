import React from 'react'
//product-1.jpg
function ProductCard() {
    let arr = [1, 2, 3, 4];
    return (
        <>
            {
                arr.map((a, index) => {
                    return (
                        <div class="col">
                            <div class="card h-100">
                                <img src={`${process.env.REACT_APP_PUBLIC_IMAGES_URL}product-` + (index+1) + `.jpg`} class="card-img-top" alt="Product" />
                                <div class="card-body">
                                    <h5 class="card-title">Virtual Reality Glasses</h5>
                                    <p class="card-text">$299.00</p>
                                    <form action="cart.html" method="GET">
                                        <input type="hidden" name="product" value="Virtual Reality Glasses" />
                                        <input type="hidden" name="price" value="299.00" />
                                        <input type="hidden" name="quantity" value="1" />
                                        <input type="submit" class="btn btn-warning" value="Add to Cart" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default ProductCard