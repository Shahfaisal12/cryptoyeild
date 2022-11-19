import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const TradingConfidience = () => {
    return (
        <div className="position-reative">
            <div className="tradingconfidience">
                <div className="container text-content">
                    <div className="text-center">
                        <span>CRYPTO.COM EXCHANGE</span>
                        <div className="heading text-white">
                            Trade with confidence on the world’s fastest
                            and most secure crypto exchange
                        </div>
                    </div>
                    <div className="d-flex justify-content-center flex-wrap">
                        <div className="icon-row">
                            <div className="d-flex flex-wrap">
                                <img src="assets/monitor.svg" alt="" />
                                <div className="context">
                                    <div className="label">
                                        DESKTOP
                                    </div>
                                    <a className="link text-decoration-none" href='/'>Go to Exchange <FiArrowUpRight /></a>
                                </div>
                            </div>
                        </div>
                        <div className="icon-row pl-50">
                            <div className="d-flex flex-wrap">
                                <img src="assets/small-mbl.svg" alt="" />
                                <div className="context">
                                    <div className="label">
                                        MOBILE APP
                                    </div>
                                    <a href="/"><img className='mr-24' src='assets/Playstoretra.svg' alt='' /></a>
                                    <a href="/"><img src='assets/Appstoretra.svg' alt='' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="display d-flex justify-content-center">
                        <img src="assets/display.png" className='img-fluid' alt="" />
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="noraml-heading">
                                        Liquidity
                                    </div>
                                    <div className="small-text">Deep order book liquidity in <br /> all market conditions
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="noraml-heading">
                                        Speed
                                    </div>
                                    <div className="small-text">2.7m TPS matching engine
                                        <br /> 50 micro second core latency
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="noraml-heading">
                                        Security
                                    </div>
                                    <div className="small-text">SOC2 Type 1 Compliance
                                        PCI:DSS 3.2.1 Level 1 compliance
                                        ISO/IEC 27001:2013
                                        ISO/IEC 27701:2019
                                        ISO 22301:2019
                                        Singapore Data Protection Trust Mark
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TradingConfidience