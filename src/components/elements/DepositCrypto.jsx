import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const DepositCrypto = () => {
    return (
            <div className="container">
        <div className="depositcrypto">
                <div className="section">
                    <div className="row">
                        <div className="col-md-6  d-flex align-items-center">
                            <div className="content">
                                <div className="context">
                                    <span>CRYPTO EARN</span>
                                    <div className="heading">Deposit crypto,
                                        earn rewards</div>
                                    <div className="small-text">Choose from 40+ cryptocurrencies and stablecoins.
                                    </div>
                                    <a href='/' className="btn-learn d-flex align-items-center text-decoration-none">Calculate Rewards <FiArrowRight style={{ marginLeft: '35px' }} /></a>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <span>Up to</span>
                                        <div className="heading">
                                            14.5%
                                        </div>
                                        <div className="small-text">p.a. on cryptos</div>
                                    </div>
                                    <div className="col-md-6">
                                        <span>Up to</span>
                                        <div className="heading">
                                            8.5%
                                        </div>
                                        <div className="small-text">p.a. on stablecoins</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 d-none d-md-block">
                            <div className="fram d-flex justify-content-center">
                                <img src="assets/mbl.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DepositCrypto