import React from 'react'
import { RichText } from 'prismic-reactjs'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from "../components/layouts"

export const query = graphql`
query PageQuery($uid: String) {
  prismic {
    allPages(uid: $uid) {
      edges {
        node {
          page_text
          page_title
          meta_title
        }
      }
    }
  }
}
`
const RenderBody = ({ pageData }) => (
  <React.Fragment>
    <section className="page">    
      <div className="column">
        {RichText.render(pageData.page_title)}
        <div className="page-content">
          {RichText.render(pageData.page_text)}
        </div>
      </div>
    </section>
  </React.Fragment>
)

const Page = props => {
  const doc = props.data.prismic.allPages.edges.slice(0,1).pop();
  if(!doc) return null;

  return(
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{RichText.asText(doc.node.meta_title)}</title>
      </Helmet>
      <RenderBody pageData={doc.node} />
    </Layout>
  )
}

export default Page;

