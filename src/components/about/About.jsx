import React from 'react'
import './about.css'
import ME from '../../assets/isai.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward classname='about__icon'/>
          <h5>Experience</h5>
          <small> 5 + Years Working</small>
          </article>

          <article className="about__card">
            <FiUsers classname='about__icon'/>
          <h5>Clients</h5>
          <small> 20 + Satisfied</small>
          </article>
          <article className="about__card">
            <VscFolderLibrary classname='about__icon'/>
          <h5>Projects</h5>
          <small> 20 + Completed</small>
          </article>
        </div>
        <p>My name is Isaí Arellano, I am a freelance IT entrepreneur and technology lover. I have had the opportunity to work in large companies, with large projects, but I am currently working in a small Startup for which I see a great future.</p>
        </div>
      </div>
    </section>
  )
}

export default About