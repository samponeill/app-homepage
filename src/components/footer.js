import React from "react"
import { SocialIcon } from 'react-social-icons';
import Navlinks from "./navlinks"
import Wave from "../images/wave.svg"

const Footer = () => (
    <>
    <footer>
        <div style={{height: "150px", overflow: "hidden", background: "none", padding: "0"}}><Wave /></div>        
        <div className="footer menu">
            <div className="container pad">
                <div className="">
                    <p>Site map</p>
                    <Navlinks />
                </div>
                <div className="">
                    <p>We are social</p>
                    <div>
                        <SocialIcon style={{ height: 25, width: 25 }} url="http://twitter.com" network="twitter" bgColor="#ffffff" />
                        <SocialIcon style={{ height: 25, width: 25 }} url="http://linkedin.com" network="linkedin" bgColor="#ffffff" />
                        <SocialIcon style={{ height: 25, width: 25 }} url="mailto:sam@samponeill.com" network="email" bgColor="#ffffff" />
                    </div>
                </div>
                <div className="">
                    <p>Other</p>                    
                </div>
            </div>
        </div>
        <div className="footer post">
            <div className="container pad">
                © {new Date().getFullYear()}, Built by
                {` `}
                <a href="https://spo.design">SPO Design Co.</a>
            </div>
        </div>
    </footer>        
  </>
)

export default Footer