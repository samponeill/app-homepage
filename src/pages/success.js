import React from "react"
import Layout from "../components/layouts"
import { Helmet } from 'react-helmet'

const SuccessPage = () => (
  <Layout>
    <Helmet title="Success!" />
    <section className="page">
    <div className="column">
      <h1>Thanks for registering your interest!</h1>
      <p>
        We will be in touch with updates and more.
      </p>
      <div>
      </div>
    </div>
    </section>
  </Layout>
)

export default SuccessPage
