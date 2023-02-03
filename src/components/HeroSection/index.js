import React from 'react'
import './HeroSection.css'
import { Button } from '../ButtonElements'

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Carpentry & Home Renovations</h1>
      <p>Built with integrity</p>
      <div className="hero-btns">
        <Button fontBig big primary round="true" to="/contact">Get In Touch</Button>
      </div>
    </div>
  )
}

export default HeroSection