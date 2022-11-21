import React from 'react'
import { BsApple, BsFacebook, BsPinterest, BsTelegram, BsTwitter } from 'react-icons/bs'
import { FaDiscord, FaLinkedin } from 'react-icons/fa'
import { SiMedium } from 'react-icons/si'
import { AiOutlineGoogle, AiOutlineInstagram } from 'react-icons/ai'
const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <ul>
              <h6>App</h6>
              <li><a href="/">Buy and Sell</a></li>
              <li><a href="/">Crypto Earn</a></li>
              <li><a href="/">Crypto Credit</a></li>
              <li><a href="/">Crypto.com Pay</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <h6>Exchange</h6>
              <li><a href="/">Exchange Home</a></li>
              <li><a href="/">Margin Trading</a></li>
              <li><a href="/">Derivatives Trading</a></li>
              <li><a href="/">The Syndicate</a></li>
              <li><a href="/">Supercharger</a></li>
              <li><a href="/">Trading Arena</a></li>
              <li><a href="/">Commerce</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <h6>Blockchain</h6>
              <li></li>
              <li><a href="/">Crypto.org Chain</a></li>
              <li><a href="/">Chain Explorer</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <h6>Resources</h6>
              <li><a href="/">Prices</a></li>
              <li><a href="/">Site Widgets</a></li>
              <li><a href="/">Tax</a></li>
              <li><a href="/">Support</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <div className="d-flex justify-content-center">
              <div className="btn-icon">
                <img src="assets/appstorefooter.svg" alt="" />
                <img src="assets/googlefooter.svg" alt="" />
                <div className="soical-icons">
                  <a href="/"> <BsFacebook className='icon' /></a>
                  <a href="/"><BsTwitter className='icon' /></a>
                  <a href="/"><AiOutlineInstagram className='icon' /></a>
                  <a href="/"><FaLinkedin className='icon' /></a>
                  <a href="/"><AiOutlineGoogle className='icon' /></a>
                  <a href="/"><BsApple className='icon' /></a>
                  <a href="/"><BsPinterest className='icon' /></a>
                  <a href="/"><FaDiscord className='icon' /></a>
                  <a href="/"><BsTelegram className='icon' /></a>
                  <a href="/"><SiMedium className='icon' /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="row mt-30">
          <div className="col-md-2">
            <ul>
              <h6>Cards</h6>
              <li><a href="/">Metal Visa Cards</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <h6>Commerce</h6>
              <li><a href="/">Pay for Business</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <h6>DeFi</h6>
              <li><a href="/">Wallet</a></li>
              <li><a href="/">Swap</a></li>
              <li><a href="/">Earn</a></li>
              <li><a href="/">Dashboard</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <ul>
              <h6>Company</h6>
              <li><a href="/">About</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">News</a></li>
              <li><a href="/">Security</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul>
              <h6>Learn</h6>
              <li><a href="/">What's Trending</a></li>
              <li><a href="/">Product News</a></li>
              <li><a href="/">Events</a></li>
              <li><a href="/">University</a></li>
              <li><a href="/">Research</a></li>
              <li><a href="/">Market Updates</a></li>
            </ul>
          </div>
        </div>
        <div className="line"></div>
        <div className="copy-right">Copyright © 2018 - 2022 Crypto.com. All rights reserved.</div>
      </div>
    </div>
  )
}

export default Footer