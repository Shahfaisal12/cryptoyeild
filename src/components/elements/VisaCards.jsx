import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const VisaCards = () => {
    return (
        <div className='visacards-section d-flex align-items-center text-white'>
            <div className="container text-center">
                <div className="context">
                    <span>CRYPTO.COM VISA CARD</span>
                    <div className="heading">The only card you need</div>
                    <div className="small-text pt-4">
                        Enjoy up to 5% back on all spending with your sleek, pure metal card. <br />
                        No annual fees. Top-up with fiat or crypto.</div>
                    <a href='/' className="btn-card d-flex justify-content-center align-items-center m-auto text-decoration-none text-white">Choose Your Cards <FiArrowRight style={{ marginLeft: '35px' }} /></a>
                </div>
            </div>

        </div>
    )
}

export default VisaCards