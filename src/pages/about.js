import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../../src/components/layout.css'
import AboutUs from '../components/About'

const About = () => (
  <Layout>
    <SEO title="About" />
    <AboutUs />
  </Layout>
)

export default About
