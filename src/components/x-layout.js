/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Glob from "../images/glob.svg"
import Header from "./header"
import Footer from "./footer"
import { Helmet } from 'react-helmet'


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query MetaQuery {
    prismic {
      allIndexs {
        edges {
          node {
            meta_title
            meta_description
          }
        }
      }
    }
  }
`)
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={data.allIndexs.edges[0].node.meta_description} />
        <title>{data.allIndexs.edges[0].node.meta_title}</title>
      </Helmet>
      <section className="background">
        <Glob />
      </section>
      <div>
        <main className="container pad">{children}</main>
        <Footer></Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

