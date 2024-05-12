import React from 'react'

function PressRelease() {
  return (
    <div className="preview">
      <div className="row gy-0">
        <div className="col-lg-6 px-0">
          <div className="card">
            <div className="overlay"></div>
            <img className="img-fluid card-image" src="./release1.jpg" alt="" />
            <div className="overlay-details fadeIn-bottom">
              <h3>Read all press release <i className="bi bi-box-arrow-up-right"></i></h3>
            </div>
          </div>
        </div>
        <div className="col-lg-6 px-0">
          <div className="card">
            <div className="overlay"></div>
            <img className="img-fluid card-image" src="./release1.jpg" alt="" />
            <div className="overlay-details fadeIn-bottom">
              <h3>Read all press release <i className="bi bi-box-arrow-up-right"></i></h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PressRelease