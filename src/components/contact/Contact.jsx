import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
      <article className="contact__option">
      <MdOutlineEmail/>
      <h4>Email:</h4>
      <h5>isai.arellano@outlook.com</h5>
      </article>
      </div>
    </section>
  )
}

export default Contact