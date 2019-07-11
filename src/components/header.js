import PropTypes from "prop-types"
import React from "react"
import Navbar from "./navbar"
import { useInView } from 'react-intersection-observer'

const Header = () => {
  const [ref, inView] = useInView({
    threshold: 0,
  })

  return (
    <>
      <div ref={ref} className="sentinel"></div>
      <div className={`header-wrap ${inView ? `` : `shadow`}`}>
      <header>
          <Navbar />
      </header>
    </div>
   </>
  )
}


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
