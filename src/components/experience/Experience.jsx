//shortcut to base code -> rafce

import React from 'react'
import './experience.css'

import { HiOutlineBadgeCheck } from 'react-icons/hi'

const experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>
      
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Self Teaching</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>Javascript</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Academic Experience</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>SAPUI5</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Self Teaching</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>Node.js</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>SQL</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Academic</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>C#</h4>
                <small className='text-light'>Professional</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Academic</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>MongooDB</h4>
                <small className='text-light'>Academic</small>
              </div>
            </article>
            <article className='experience_details'>
              <HiOutlineBadgeCheck className='experience_icon' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Academic</small>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  )
}

export default experience