import React from 'react'
import './Contact.css'
import { TfiEmail, FaRegEnvelope, FaPhone, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { SocialIcon, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from '../Footer/FooterElements'
import Map from "../../Backgrounds/locations.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaEnvelope } from '@fortawesome/fontawesome-svg-core'

function ContactForm() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <h2>Get in touch today to see how we can help with your next project.</h2>
        <a href='mailto:info@newageprojects.ca' >info@newageprojects.ca</a>
        <a href='tel:+16044407039'>+1-604-440-7039</a>
        <p2>Or get in touch via social media:</p2> 
          <p2>
          <SocialIcons>
            <SocialIconLink href="https://www.facebook.com/newageprojects" target="_blank" aria-label="Facebook">
              <FaFacebook size="3x"/>
            </SocialIconLink>
            <SocialIconLink href="https://www.instagram.com/newageprojectsca" target="_blank" aria-label="Instagram">
              <FaInstagram  size="3x"/>
            </SocialIconLink>
            <SocialIconLink href="https://www.linkedin.com/company/new-age-projects/" target="_blank" aria-label="Linkedin">
              <FaLinkedin  size="3x"/>
            </SocialIconLink>
          </SocialIcons>
        </p2>
    </div>
  )
}

export default ContactForm