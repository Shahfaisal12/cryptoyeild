import React from 'react'

const Hero = () => {
  return (
    <div className="hero-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-5 img">
            <img src="assets/mbl.png" alt="" />
          </div>
          <div className="col-md-7">
            <div className="context">
              <div className="heading text-white">The World’s Fastest Growing Crypto App</div>
              <div className="d-flex mt-4">
                <div className="icon">
                  <img src="assets/Vector.svg" alt="" />
                </div>
                <div className="text">
                  <p className='mb-1'>Join <span>50m+</span> users buying and selling <span>250+ cryptocurrencies at true cost</span></p>
                </div>
              </div>
              <div className="d-flex">
                <div className="icon">
                  <img src="assets/Vector.svg" alt="" />
                </div>
                <div className="text">
                  <p className='mb-1'>Spend with the Crypto Yeild Visa Card and get <span>up to 5%</span> back</p>
                </div>
              </div>
            <div className="d-flex">
              <div className="icon">
                <img src="assets/Vector.svg" alt="" />
              </div>
              <div className="text">
                <p className='mb-0'>Grow your portfolio by <span>receiving rewards up to 14.5%</span> on your crypto assets</p>
              </div>
            </div>
            </div>
              <div className="btns mt-5">
                <div className="d-flex">
                  <img src="assets/getgoogle.svg" alt="" />
                  <img className='px-4' src="assets/getplay.svg" alt="" />
                  <img src="assets/barcode.svg" alt="" />

                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero