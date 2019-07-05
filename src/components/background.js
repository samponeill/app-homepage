import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ className }) => (
    <StaticQuery query={graphql`
      query {
        desktop: file(relativePath: { eq: "glob.png" }) {
          childImageSharp {
            fluid(quality: 100, maxWidth: 4160) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
     render={data => {
       // Set ImageData.
       const imageData = data.desktop.childImageSharp.fluid
       return (
          <BackgroundImage Tag="section"
                           className={className}
                           fluid={imageData}
          >
          </BackgroundImage>
       )
     }
     }
    />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: right center;
  background-repeat: no-repeat;
  background-size: cover;
  display: block;
  height: 100vh;
  position: fixed;
`

export default StyledBackgroundSection