import React from 'react'
import { Link, StaticQuery, graphql } from 'gatsby'
import { linkResolver } from '../../utils/linkResolver'
import { Helmet } from 'react-helmet'
import Header from "../header"
import Footer from "../footer"
import Glob from "../../images/glob.svg"

class Layout extends React.Component {
  render() {
    const { data } = this.props;
    return(
      <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={data.meta_description} />
        <title>{data.meta_title}</title>
      </Helmet>
      <Header>
        
      </Header>
      <section className="background">
        <Glob />
      </section>
      <div>
        <main className="container pad">
          {this.props.children}
        </main>
        <Footer></Footer>
      </div>
      </React.Fragment>
    );
  }
}

export default props => (
  <StaticQuery
    query={graphql`
      {
        prismic{
          allIndexs {
            edges {
              node {
                meta_description
                meta_title
              }
            }
          }
          allPages {
            edges {
              node {
                meta_description
                meta_title
              }
            }
          } 
        }
      }
    `}
    render={data => <Layout data={data} {...props}/>}
  />
)