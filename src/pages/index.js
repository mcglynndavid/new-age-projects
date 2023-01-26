import * as React from "react"
import Hero from "../components/Hero"
// import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Services from "../components/Services"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Services />
  </Layout>
)

export default IndexPage
