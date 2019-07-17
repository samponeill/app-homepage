import React from "react"
import Link from "gatsby-link";

const Navlinks = () => (
    <>
    <Link
        className="navbar-link-wrapper"    
        to="/"
        activeClassName="active"
        >
        <div className="navbar-link">
            Home
        </div>
    </Link>
    <Link
        className="navbar-link-wrapper"    
        to="/about"
        activeClassName="active"
        >
        <div className="navbar-link">
            About
        </div>
    </Link>
    <Link
        className="navbar-link-wrapper"
        to="/register-interest"
        activeClassName="active"
        >
        <div className="navbar-link">
            Register your interest
        </div>
    </Link>
    </>
)

export default Navlinks
