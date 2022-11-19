import React from 'react'
import Bycrypto from '../components/elements/Bycrypto'
import DepositCrypto from '../components/elements/DepositCrypto'
import Hero from '../components/elements/Hero'
import TradingConfidience from '../components/elements/TradingConfidience'
import VisaCards from '../components/elements/VisaCards'

const Home = () => {
  return (
    <>
    <Hero />
    <Bycrypto />
    <VisaCards />
    <DepositCrypto />
    <TradingConfidience />
    </>
  )
}

export default Home