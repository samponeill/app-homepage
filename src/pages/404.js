import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section>
      <h1>Oops</h1>
      <p>You just hit a route that doesn&#39;t exist ... oh my</p>
    </section>
  </Layout>
)

export default NotFoundPage
