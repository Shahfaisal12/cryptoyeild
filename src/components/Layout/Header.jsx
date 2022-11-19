import React from 'react'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container">
    <a className="navbar-brand text-white" href="/">Crypto Yield</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
      <ul className="navbar-nav align-items-center mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">NFT</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Price</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Products</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Company</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Learn</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><img src='assets/appstorebutton.svg' alt='' width={50} height={50} /></a>
        </li>
        <li className="nav-item pl-4">
          <a className="nav-link" href="/"><img src='assets/playstorebutton.svg' alt='' width={50} height={50} /></a>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Header