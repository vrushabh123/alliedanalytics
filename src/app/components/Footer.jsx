import React from 'react'

function Footer() {
  return (
    <footer id="footer" className="footer">

    <div className="container">
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-info"></div>

        <div className="col-lg-7 col-6 footer-links">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A laborum modi ullam doloremque reiciendis unde quidem reprehenderit excepturi dolorem doloribus est</p>
        </div>

      </div>
      <div className="row gy-4">
        <div className="col-lg-5 col-md-12 footer-info position-relative">
          <input type="email" placeholder="Your e-mail" />
          <button type="submit" className="btn btn-primary register">Register</button>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4>The Company</h4>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Whe Decoareh Dive?</a></li>
            <li><a href="#">Research Methodology</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div className="col-lg-2 col-6 footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Syndicate Reports</a></li>
            <li><a href="#">Customize Reports</a></li>
            <li><a href="#">Cunsulting Services</a></li>
          </ul>
        </div>

        <div className="col-lg-3 col-md-12 footer-links">
          <h4>Find Help</h4>
          <ul>
            <li><a href="#">GDPR Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Return Policy</a></li>
            <li><a href="#">Delivery Method</a></li>
            <li><a href="#">Terms and Condition</a></li>
          </ul>

        </div>

      </div>
    </div>

    <div className="container credit-wrapper mt-4">
      <div className="copyright">Disclaimer | Sitemap | Contact Us</div>
      <div className="credits">
        &copy; 2023 Research Drive. All Rights Reserved
      </div>
    </div>

  </footer>
  )
}

export default Footer