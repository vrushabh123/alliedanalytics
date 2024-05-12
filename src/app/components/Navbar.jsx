import React from 'react'

const Navbar = () => {
  return (
    <header id="header" className="header d-flex align-items-center">
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

        <a href="index.html" className="logo d-flex align-items-center">
          <h1>Add Logo Here</h1>
        </a>

        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
        <nav id="navbar" className="navbar">
          <ul>
            <li><a href="about.html">About us</a></li>
            <li><a href="services.html">Consulting</a></li>
            <li><a href="pricing.html">Reports</a></li>
            <li><a href="contact.html">Contact us</a></li>
            <li><a className="get-a-quote" href="get-a-quote.html">Login</a></li>
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Navbar