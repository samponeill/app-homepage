import React from "react"
import Layout from "../components/layouts"
import Img from 'gatsby-image'
import CTA from '../components/slices/CTA'
import Features from '../components/slices/Features'
import TextLeft from '../components/slices/TextLeft'
import TextRight from '../components/slices/TextRight'
import { Link, graphql } from 'gatsby'
import { RichText } from 'prismic-reactjs'
import { linkResolver } from '../utils/linkResolver'
import { Helmet } from 'react-helmet'

export const query = graphql`
query IndexQuery {
  prismic {
    allIndexs {
      edges {
        node {
          intro
          heading
          meta_title
          meta_description
          image
          imageSharp {
            childImageSharp {
              fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          body {
            ... on PRISMIC_IndexBodyForm {
              type
              label
              primary {
                description_text
                title
                cta_label
                cta_link {
                  _linkType
                  ... on PRISMIC_Page {
                    page_title
                    page_text
                    _meta {
                      uid
                      type
                      id
                    }
                  }
                }
              }
            }
            ... on PRISMIC_IndexBodyHeading_with_icons {
              type
              label
              primary {
                icon_1
                icon_1_text
                icon_2
                icon_2_text
                icon_3
                icon_3_text
                icons_heading
              }
            }
            ... on PRISMIC_IndexBodyText_left___image_right {
              type
              label
              primary {
                explainer_description
                explainer_heading
                explainer_image
                explainer_imageSharp {
                  childImageSharp {
                    children {
                      ... on ImageSharp {
                        id
                      }
                    }
                  }
                }
              }
            }
            ... on PRISMIC_IndexBodyText_right___image_left {
              type
              label
            }
          }
          call_to_action_text
          call_to_action_label
          call_to_action_link {
            ... on PRISMIC_Page {
              _meta {
                uid
                id
                type
              }
            }
            _linkType
            ... on PRISMIC__ExternalLink {
              _linkType
              url
            }
          }
        }
      }
    }
  }
}
`

const RenderSlices = ({ slices }) => {
  return slices.map((slice, index) => {
    const res = (() => {
      switch(slice.type) {
        case 'cta_banner': return (
          <div key={index} className="homepage-slice-wrapper">
            <CTA slice={slice} />
          </div>
        )

        case 'featured_items': return (
          <div key={index} className="homepage-slice-wrapper">
            <Features slice={slice} />
          </div>
        )

        case 'big_bullet_item': return (
          <div key={index} className="homepage-slice-wrapper">
            <TextLeft slice={slice} />
          </div>
        )

        case 'text_block': return (
          <div key={index} className="homepage-slice-wrapper">
            <TextRight slice={slice} />
          </div>
        )

        default: return
      }
    })();
    return res;
  })
}

const RenderIndexBody = ({ home }) => (
  <React.Fragment>
      <section className="home">
      <div className="column">
          {RichText.render(home.heading)}
          {RichText.render(home.intro)}
          {RichText.render(home.call_to_action_text)}
          { home.call_to_action_link._meta ?
          (<Link className="button primary shadow" to={linkResolver(home.call_to_action_link._meta)}>
            {RichText.asText(home.call_to_action_label)}  
          </Link>) :      
          (<a className="button primary shadow" href={home.call_to_action_link.url}>
            {RichText.asText(home.call_to_action_label)}
          </a>)
          }
      </div>
      <div className="column">
        <Img fluid={home.imageSharp.childImageSharp.fluid} />
      </div>
      </section>
    <div className="homepage-slices-wrapper">
      <RenderSlices slices={home.body} />
    </div>
  </React.Fragment>
);

const IndexPage = data => {
  const doc = data.data.prismic.allIndexs.edges.slice(0,1).pop();
  if(!doc) return null;

  return(
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={RichText.asText(doc.node.meta_description)}/>
        <title>{RichText.asText(doc.node.meta_title)}</title>
      </Helmet>
      <RenderIndexBody home={doc.node} />
    </Layout>
  )
}

export default IndexPage;