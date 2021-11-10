import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

export default function SplashNavbar() {
  const [navbar, setNavbar] = useState(false)
  const [logo, setLogo] = useState(false)
  const [signupBtn, setSignupBtn] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 960) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  const showLogo = () => {
    if (window.scrollY >= 960) {
      setLogo(true)
    } else {
      setLogo(false)
    }
  }

  const showSignupBtn = () => {
    if (window.scrollY >= 960) {
      setSignupBtn(true)
    } else {
      setSignupBtn(false)
    }
  }

  window.addEventListener('scroll', changeBackground)
  window.addEventListener('scroll', showLogo)
  window.addEventListener('scroll', showSignupBtn)

  return (
    <header>
      <nav className={navbar ? 'splash-nav-active' : 'splash-nav'}>
        <img
          className={logo ? 'splash-logo-active' : 'splash-logo-hidden'}
          src={ window.destinyLogoURL }
        />
        <div className="account">
          <NavLink className={signupBtn ? 'signup-active' : 'signup-hidden'} to="/signup">SIGN UP AND SAVE</NavLink>
          <NavLink className="login" to="/login">LOG IN</NavLink>
        </div>
      </nav>
    </header>
  )
}

