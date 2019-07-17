import React from 'react';
import Link from "gatsby-link";
import Logo from './logo';
import Navlinks from './navlinks';

class Navbar extends React.Component {
  
  state = { showMenu: false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'active' : '';
    const burgerActive = this.state.showMenu ? 'active' : '';
      return (     
        <nav className="container navbar">
            <div className="navbar-burger navbar-chunk">
                <div className="burger-button-wrap"
                    onClick={this.toggleMenu}
                >
                    <button
                    type="button"
                    name="Menu"
                    aria-label="Menu"
                    aria-controls="navigation"
                    className={`burger-button burger ${burgerActive}`}
                    >
                            <span id="burger-top"></span>
                            <span id="burger-mid"></span>
                            <span id="burger-btm"></span>
                    </button>
                    <label for="Menu">Menu</label>                            
                </div>                            
                <div className={`navbar-menu ${menuActive}`} >
                    <div className="navbar-start">
                        <div className="navbar-link-wrapper" to="/" onClick={this.toggleMenu}>
                            <div 
                            className="burger-button-wrap"
                            onClick={this.toggleMenu}
                            >
                                <button
                                    type="button"
                                    name="Close"
                                    aria-label="Close"
                                    aria-controls="navigation"
                                    className={`burger-button burger ${burgerActive}`}
                                >
                                    <span id="burger-top"></span>
                                    <span id="burger-mid"></span>
                                    <span id="burger-btm"></span>
                                </button>
                                <label for="Close">Close</label>                            
                            </div>     
                        </div>               
                        <Navlinks />
                    </div>
                </div>                
            </div>
            <div className="navbar-brand navbar-chunk">
                <Link className="navbar-item" to="/">
                    <Logo />
                </Link>
            </div>            
            <div className="navbar-button navbar-chunk">
                <Link to="/register-interest" className="button primary shadow">Register</Link>
            </div>
        </nav>)
  }
};

export default Navbar;
