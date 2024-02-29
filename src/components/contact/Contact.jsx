//shortcut to base code -> rafce

import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {AiOutlineLinkedin} from 'react-icons/ai'
import { useRef as UseRef } from 'react';
import emailjs from 'emailjs-com';

const contact = () => {

  const form = UseRef();

  const sendEmail = (e) => {
    e.preventDefault();

    //process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_USER_ID
    emailjs.sendForm( 'service_r3x4onn', 'template_9cf0vs6', form.current, 'uS07n0wcnOfcAo8GM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container container_contact">
        <div className="contact_options">
          <article className="contact_option">
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>joaoantoniogiesteira@gmail.com</h5>
            <a href="mailto:joaoantoniogiesteira@gmail.com" target='_blank'>Send a Message</a>
          </article>
          <article className="contact_option">
            <AiOutlineLinkedin className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>www.linkedin.com/in/joao-Giesteira</h5>
            <a href="https://pt.linkedin.com/in/jo%C3%A3o-giesteira-326b7b168" target='_blank'>Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Name/Company' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="8" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Email</button>
        </form>
      </div>
    </section>
  )
}

export default contact