import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import SplitText from 'react-pose-text'
import { useInView, InView } from 'react-intersection-observer'
import posed from 'react-pose'

const IndexPage = () => {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 1,
  })

  const charPoses = {
    exit: { opacity: 0, y: 10 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }) => charIndex * 30
    }
  };

  const Item = {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <Layout>
      <SEO title="The flexible pension app for flexible workers" />  
      <section className="home">
      <div className="column">
      <InView>
        {({ inView, ref }) => (
          <h1 ref={ref}>
            <SplitText pose={inView ? 'enter' : 'exit'} charPoses={charPoses}>
              Finally, a pension for all you self-employed go-getters
            </SplitText>
          </h1>
        )}
      </InView>
          <p>
            <SplitText initialPose="exit" pose="enter" charPoses={Item}>            
              No minimum contributions, low annual fees and a smooth setup. We’re as flexible as you are, baby. 
            </SplitText>
          </p>
          <p>
            <SplitText initialPose="exit" pose="enter" charPoses={Item}>            
              To find out more, sign up to our waiting list:
            </SplitText>
          </p>
          <div style={{display: "block"}}>
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
}

export default IndexPage
