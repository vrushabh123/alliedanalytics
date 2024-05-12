import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section id="hero" className="hero d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-between">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h2>Lorem ipsum dolor <b>sit amet,</b> consectetur adipisicing elit.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              voluptates culpa ex fugit. Sequi iste qui, a eius fugit vero placeat blanditiis omnis dolor doloribus fugiat
              incidunt, assumenda voluptate animi?</p>

            <a className="view-more">View more</a>
            <form action="#" className="form-search d-flex align-items-stretch mb-3">
              <i className="bi bi-search"></i>
              <input type="text" className="form-control" placeholder="Lorem ipsum dolor sit amet" />
              <button type="submit" className="btn btn-primary">Search</button>
            </form>
          </div>

          <div className="col-lg-5 order-1 order-lg-2 hero-img">
            <img src="/Hero.jpg" alt="Hero" className="img-fluid mb-3 mb-lg-0" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero