import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../../src/components/layout.css'
import ContactForm from '../components/Contact'

const Contact = () => (
  <Layout>
    <SEO title="Contact Us" />
    <ContactForm />
  </Layout>
)

export default Contact
