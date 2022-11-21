import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const MadeSample = () => {
    return (
        <div className="container">
            <div className="madesample">
                <div className="section">
                    <div className="row">
                        <div className="col-md-5 d-none d-md-block">
                            <div className="fram d-flex justify-content-center">
                                <img src="assets/mbl.png" className='img-fluid' alt="" />
                            </div>
                        </div>
                        <div className="col-md-7 d-flex align-items-center">
                            <div className="content">
                                <div className="context">
                                    <span>CRYPTO.COM DEFI</span>
                                    <div className="heading">DeFi Made Simple</div>
                                    <div className="small-text"><span1 className='text-primary'>DeFi Wallet.</span1> Your Keys, Your Crypto.</div>
                                    <div className="small-text"><span1 className='text-primary'>DeFi Earn.</span1> No lock-up period and stable returns.</div>
                                    <div className="small-text"><span1 className='text-primary'>DeFi Swap. </span1> Swap DeFi coins and earn Triple Yield.</div>
                                    <a href='/' className="btn-learn d-flex align-items-center text-decoration-none">Go to Crypto.com DeFi <FiArrowRight style={{ marginLeft: '35px' }} /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MadeSample;