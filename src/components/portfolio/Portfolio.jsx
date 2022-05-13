import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      <article className='portfolio__item'>
      <div className="portfolio__item-image">
        <img src={IMG1} alt="stormleadsinnovation.com"/>
      </div>
      <h3>Storm leads innovation</h3>
       <div className="portfolio__item-cta">
        <a href="https://stormleadsinnovation.com/" className='btn btn-primary' target='_blank'>Go</a>
       </div>
       </article>
      </div>
    </section>
  )
}

export default Portfolio