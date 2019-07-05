import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/Image"

const IndexPage = () => (
  <Layout>
    <SEO title="Contact us" />
    <section className="page">
        <div className="column">
        <h1>Find out more</h1>
        <p>
            Sign up to our waiting list and get the latest updates sent to your inbox 
        </p>
        <div>
            <form>
                <div className="form-grid">
                    <div className="form-column">
                        <label for="email">Name:</label>
                        <input name="email" type="text"></input>
                    </div>
                    <div className="form-column">
                        <label for="email">Email:</label>
                        <input name="email" type="text"></input>
                    </div>
                </div>
                <label for="message">Message</label>
                <textarea type="textarea" name="message"></textarea>                
                <button className="button shadow" type="submit">Sign up</button>
            </form>
        </div>
        </div>
    </section>
  </Layout>
)

export default IndexPage
