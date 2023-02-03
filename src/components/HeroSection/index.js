import React from 'react'
import './HeroSection.css'
import { Button } from '../ButtonElements'
import { navigate } from "gatsby"

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Carpentry & Home Renovations</h1>
      <p>Built with integrity</p>
      <div className="hero-btns">
        {/* <Button href="/contact" fontBig big primary to="/contact">Get In Touch</Button> */}
        <Button fontBig onClick={()=>{navigate("/contact")}}>Get In Touch</Button>
      </div>
    </div>
  )
}

export default HeroSection