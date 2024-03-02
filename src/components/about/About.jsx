//shortcut to base code -> rafce

import React from 'react'
import './about.css'
import ME from '../../assets/about_me6.jpg'
import {AiOutlineTrophy} from 'react-icons/ai'
import {MdOutlineDriveFolderUpload} from 'react-icons/md'


const About = () => {
  return (
    <section id='about'>
      <h2>About me</h2> 
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About me" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <AiOutlineTrophy className='about_icon'/>
              <h5>Experience</h5>
              <small>5+ Years</small>
            </article>
            <article className='about_card'>
              <MdOutlineDriveFolderUpload className='about_icon'/>
              <h5>Projects</h5>
              <small>5+ Completed</small>
            </article>
          </div>

          <p>
            Proactive professional with over 5 years of experience. Knowledge in web platform development and programming. Aiming to enhance my skills to successfully fill the role of web developer.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About