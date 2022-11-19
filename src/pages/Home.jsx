import React from 'react'
import Bycrypto from '../components/elements/Bycrypto'
import CryptoCurrency from '../components/elements/CryptoCurrency'
import DepositCrypto from '../components/elements/DepositCrypto'
import Hero from '../components/elements/Hero'
import MadeSample from '../components/elements/MadeSample'
import TradingConfidience from '../components/elements/TradingConfidience'
import VisaCards from '../components/elements/VisaCards'
// import MadeSample from '../components/elements/MadeSample'

const Home = () => {
  return (
    <>
    <Hero />
    <Bycrypto />
    <VisaCards />
    <DepositCrypto />
    <TradingConfidience />
    <MadeSample />
    <CryptoCurrency />
    </>
  )
}

export default Home