import React from 'react'

const CryptoCurrency = () => {
    return (
        <div className='cryptocurrency-section d-flex align-items-center text-white'>
            <div className="container text-center">
                <div className="context">
                    <span>OUR VISION</span>
                    <div className="heading">Cryptocurrency in <br /> Every Wallet™</div>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="brand text-white">
                                        Founded in
                                    </div>
                                    <div className="price">2022</div>
                                </div>
                                <div className="col-md-6 border-vertical mt-3 mt-md-0">
                                    <div className="brand text-white">
                                    Users
                                    </div>
                                    <div className="price">70</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CryptoCurrency;