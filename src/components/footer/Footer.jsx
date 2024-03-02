//shortcut to base code -> rafce

import React from 'react'
import './footer.css'
import {AiOutlineLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>João Giesteira</a>
      <ul className='permalinks'>
        <li><a href="/#">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://linkedin.com/in/joao-Giesteira"><AiOutlineLinkedin/></a>
      </div>


      <div className="footer_copyright">
        <small>
          &copy; Several research sources were used to develop this portfolio. This is a self-study project.
        </small>
      </div>
    </footer>
  )
}

export default Footer