import React from 'react'

function Notification() {
  return (
    <section id="notification" className="notification pt-0">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>Get Notification</h2>
        </div>
        <div className="row gy-4">
          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <select>
              <option>Select Category</option>
            </select>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <select>
              <option>Select Frequency</option>
            </select>
          </div>
          <div className="row gy-4">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
              <input type="email" placeholder="Email" />
            </div>
          </div>
        </div>
        <div className="register">
          <button type="submit" className="btn btn-primary">Register Now</button>
        </div>
      </div>
    </section>
  )
}

export default Notification