import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const RegisterForm = () => (
  <Layout>
    <SEO title="Contact us" />
    <section className="page">
        <div className="column">
        <h1>Find out more</h1>
        <p>
            Sign up to our waiting list and get the latest updates sent to your inbox 
        </p>
        <div>
            <form name="Contact" method="post" action="/success" data-netlify="true" data-netlify-honeypot="bot-field">
                <div className="form-grid">
                    <div className="form-column">
                        <label for="name">Name:</label>
                        <input name="name" type="text"></input>
                    </div>
                    <div className="form-column">
                        <label for="email">Email:</label>
                        <input name="email" type="text"></input>
                    </div>
                </div>
                <label for="comments">Comments:</label>
                <textarea type="textarea" name="comments"></textarea>                
                <button className="button shadow" type="submit">Register</button>
            </form>
        </div>
        </div>
    </section>
  </Layout>
)

export default RegisterForm
