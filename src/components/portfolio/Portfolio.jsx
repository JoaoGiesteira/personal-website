//shortcut to base code -> rafce

import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Portfolio React JS.jpg'
import IMG2 from '../../assets/future_projects.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Latest Personal Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>My Portfolio in React JS</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/JoaoGiesteira/personal-website" className='btn' target="_blank">Github</a>
            <a href="https://www.joaogiesteira.com/" className='btn btn-primary' target="_blank">Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className="portfolio_item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Future Personal Projects (WIP)</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com/JoaoGiesteira" className='btn' target="_blank">Github</a>
            <a href="https://github.com/JoaoGiesteira" className='btn btn-primary' target="_blank">Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio