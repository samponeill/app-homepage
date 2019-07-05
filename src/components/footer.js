import React from "react"
import Navlinks from "./navlinks"

const Footer = () => (
    <>
    <footer>
        <div className="footer menu">
            <div className="container pad">
                <div className="">
                    <p>Site map</p>
                    <Navlinks />
                </div>
                <div className="">
                    <p>Social media</p>
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