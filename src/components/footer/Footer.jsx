import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>isai.dev</a>
      <div className='footer__socials'>
        <a href='https://www.facebook.com/isai.x.x/' target="_blank"><FaFacebookF/></a>
        <a href='https://www.instagram.com/isai.x.x/' target="_blank"><FiInstagram/></a>
        <a href='https://twitter.com/Isai_x_x' target="_blank"><IoLogoTwitter/></a>
      </div>
      <div className="footer__copyright">
      <small>&copy; Isai.dev. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer