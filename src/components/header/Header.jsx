//shortcut to base code -> rafce

import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me3.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h1>João Giesteira</h1>
        <h5 className="text-light">Developer</h5>
        <CTA />
        {/* <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'> Scroll Down</a> */}
      </div>
    </header>
  )
}

export default Header