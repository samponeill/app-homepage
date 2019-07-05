import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"

const Header = ({ siteTitle }) => (
  <div className="header-wrap">
    <header>
        <Navbar />
    </header>
    <div className="rainbow shadow"></div>
   </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
