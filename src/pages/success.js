import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const SuccessPage = () => (
  <Layout>
    <SEO title="Success!" />
    <section className="page">
    <div className="column">
      <h1>Thanks for registering your interest!</h1>
      <p>
        We will be in touch with updates and more.
      </p>
      <div>
        <form name="Register interest" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
          <label for="email">Email:</label>
          <input name="email" type="text"></input>
          <button className="button shadow" type="submit">Register</button>
        </form>
      </div>
    </div>
    </section>
  </Layout>
)

export default SuccessPage
