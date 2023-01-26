import React from 'react'
import styled from 'styled-components'
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import {StaticImage} from "gatsby-plugin-image"

const Services = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(
          filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, name: {nin: ["logotrans", "Logo_b"]}}
        ) {
          edges {
            node {
              base
              childImageSharp {
                fluid {
                 ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `)

    return(
        <div className="image-container">
            <h1>View our Projects</h1>
            <div className="image-grid">
                {data.allFile.edges.map((image, key) => (
                    <Img key={key}
                    className="image-item"
                    fluid={image.node.childImageSharp.fluid}
                    alt={image.node.base.split('.')[0]}
                    />
                ))}
            </div>
        </div>
    )
}

export default Services

const ServicesContainer = styled.div`
    min-height: 100vh;
    padding: 5rem calc((100vw - 1300px)/2);
    background red;
    color: #fff;
`

const ServicesHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
    color: #000;
`

const ServicesWrapper = styled.div``