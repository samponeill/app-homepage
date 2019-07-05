import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="The flexible pension app for flexible workers" />
    <section className="home">
    <div className="column">
      <h1>Finally, a pension for all you self-employed go-getters</h1>
      <p>
        No minimum contributions, low annual fees and a smooth setup. We’re as flexible as you are, baby. 
      </p>
      <p>
        To find out more, sign up to our waiting list:
      </p>
      <div>
        <form name="Register interest" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
          <label for="email">Email:</label>
          <input name="email" type="text"></input>
          <button className="button shadow" type="submit">Register</button>
        </form>
      </div>
    </div>
    <div className="column">
      <Image />
    </div>
    </section>
  </Layout>
)

export default IndexPage
