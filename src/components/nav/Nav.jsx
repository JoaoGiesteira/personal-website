//shortcut to base code -> rafce

import React from 'react'
import './nav.css'
import {BiHomeAlt} from 'react-icons/bi'
import {SiAboutdotme} from 'react-icons/si'
import {HiOutlineBookOpen} from 'react-icons/hi'
import {FaHandsHelping} from 'react-icons/fa'
import {BsFillChatTextFill} from 'react-icons/bs'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><BiHomeAlt/></a>
      <a href="/#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="/#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><HiOutlineBookOpen/></a>
      <a href="/#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaHandsHelping/></a>
      <a href="/#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsFillChatTextFill/></a>
    </nav>
  )
}

export default Nav