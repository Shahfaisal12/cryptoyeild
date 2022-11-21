
import React from 'react'
import { FiArrowRight } from 'react-icons/fi'


const tableData = [{
    name: 'Bitcoin',
    brand: 'BTA',
    price: '$21,019.25',
    percent: '-1.35%',
    value: '$400,939,726,363.91',
    img: 'assets/graphblue.svg',

}, {
    name: 'Ethereum',
    brand: 'ETH',
    price: '$1,593.36',
    percent: '-2.40%',
    value: '$193,478,949,760.73',
    img: 'assets/Graphred.svg',
}, {
    name: 'Cardano',
    brand: 'ADA',
    price: '$0.411385',
    percent: '-3.69%',
    value: '$13,957,416,040.67',
    img: 'assets/graphblue.svg',
}, {
    name: 'Dogecoin',
    brand: 'DOGE',
    price: '$0.118427',
    percent: '-5.00%',
    value: '$15,551,890,509.69',
    img: 'assets/Graphred.svg',
}, {
    name: 'Polkadot',
    brand: 'DOT',
    price: '$6.95',
    percent: '-1.79%',
    value: '$7,791,830,488.81',
    img: 'assets/graphblue.svg',
},]

const Bycrypto = () => {
    return (
        <div className="bycrypto-section">
            <div className="container">
                <div className="heading-text text-center">
                    <span>SECURELY BUY, SELL, STORE, SEND AND TRACK</span>
                    <div className="heading">Buy crypto at true cost</div>
                    <div className="small-text pt-4">
                        Buy and sell 250+ cryptocurrencies with 20+ fiat currencies <br /> using bank transfers or your credit/debit card.

                    </div>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <tbody>
                            {
                                tableData.map((item) =>
                                    <tr>
                                        <td>{item.name} <span className='mb-0'>{item.brand}</span></td>
                                        <td>{item.price}</td>
                                        <td>{item.percent}</td>
                                        <td>{item.value}</td>
                                        <td><img src={item.img} alt='' /></td>
                                        <td><button type="button" className="btn btn-dark">Trade</button>
                                        </td>
                                    </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>

                <a href='/' className="btn btn-learn d-flex m-auto d-flex align-items-center">Learn More <FiArrowRight style={{ marginLeft: '35px' }} /></a>
            </div>
        </div>
    )
}

export default Bycrypto