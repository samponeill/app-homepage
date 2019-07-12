import React from "react"
import Link from 'gatsby-plugin-transition-link'
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const Navlinks = () => (
    <>
    <AniLink
        className="navbar-link-wrapper"    
        to="/"
        fade top="entry"
        bg="#FFF7F7"
        direction="right"
        duration={0.25}
        activeClassName="active"
        >
        <div className="navbar-link">
            Home
        </div>
    </AniLink>
    <AniLink
        className="navbar-link-wrapper"    
        to="/about"
        fade top="entry"
        bg="#FFF7F7"
        direction="right"
        duration={0.25}
        activeClassName="active"
        >
        <div className="navbar-link">
            About
        </div>
    </AniLink>
    <AniLink
        className="navbar-link-wrapper"
        to="/about"
        fade top="entry"
        bg="#FFF7F7"
        direction="right"
        duration={0.25}
        activeClassName="active"
        >
        <div className="navbar-link">
            Register your interest
        </div>
    </AniLink>
    </>
)

export default Navlinks
