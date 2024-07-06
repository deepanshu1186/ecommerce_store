import React from 'react'

function Banner() {
  return (
    <section className="container-fluid">
        <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center bg-warning text-white p-5">
                <div>
                    <h1>Discover the Future With CoolGadgets!</h1>
                    <p className="mb-4"><em>Innovation is not solely about major discoveries.<br />It's about constantly challenging the status quo.</em></p>
                    <a href="products.html" className="btn btn-light btn-lg">Shop Now &#10142;</a>
                </div>
            </div>
            <div className="col-md-6 banner-image"></div>
        </div>
    </section>
  )
}

export default Banner