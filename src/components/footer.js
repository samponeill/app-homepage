import React from "react"
import { SocialIcon } from 'react-social-icons'
import Link from "gatsby-link"
import Navlinks from "./navlinks"
import Wave from "../images/wave.svg"

const Footer = () => (
    <>
    <footer>
        <div style={{height: "150px", overflow: "hidden", background: "none", padding: "0"}}><Wave /></div>        
        <div className="footer menu">
            <div className="container pad">
                <div className="">
                    <p>Useful links</p>
                    <Navlinks />
                </div>
                <div className="">
                    <p>Legal stuff</p>
                    <Link
                    className="navbar-link-wrapper"
                    to="/terms-conditions"
                    activeClassName="active"
                    >
                        <div className="navbar-link">
                            Terms and conditions
                        </div>
                    </Link>
                    <Link
                    className="navbar-link-wrapper"
                    to="/privacy-policy"
                    activeClassName="active"
                    >
                        <div className="navbar-link">
                            Privacy policy
                        </div>
                    </Link>                               
                </div>
                <div className="">
                    <p>We are social</p>
                    <div>
                        <SocialIcon style={{ height: 45, width: 45, display: "inline-block" }} url="http://twitter.com" network="twitter" bgColor="#ffffff" />
                        <SocialIcon style={{ height: 45, width: 45, display: "inline-block" }} url="http://linkedin.com" network="linkedin" bgColor="#ffffff" />
                        <SocialIcon style={{ height: 45, width: 45, display: "inline-block" }} url="mailto:sam@samponeill.com" network="email" bgColor="#ffffff" />
                    </div>
                </div>                
            </div>
        </div>
        <div className="footer post">
            <div className="container pad">
                <p>With pensions, as with all investments, your capital is at risk and the value of your pension with Jamjar may go up as well as down. You may get back less than you put in.</p>
                <p>© {new Date().getFullYear()}, Built by{` `}<a href="https://spo.design">SPO Design Co.</a></p>
            </div>
        </div>
    </footer>        
  </>
)

export default Footer