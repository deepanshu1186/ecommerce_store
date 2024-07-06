import React from 'react'
import ProductCard from './ProductCard'

function ProductsCards() {
  return (
    <div class="container my-5">
        <h2 class="text-center mb-4">Featured Products</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <ProductCard />
        </div>
    </div>
  )
}

export default ProductsCards