import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SplitText from 'react-pose-text'
import { useInView } from 'react-intersection-observer'

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
<Layout>
    <SEO title={frontmatter.title} />
    <section className={`page ` +  frontmatter.tags}>
      <div className="column">
        <h1>
            {frontmatter.title}
        </h1>
        <div
            className="page-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
      </div>
    </section>
  </Layout>

  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        tags
      }
    }
  }
`