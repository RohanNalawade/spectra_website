import React from 'react';
import './css/firstPage.css'
import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            moblieNav: false
        }
    }
    moblieNavBar = () => {
        console.log('ji')
        this.setState({
            moblieNav: !this.state.moblieNav
        })
    }
     componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 20) {
      document.querySelector(".navbar").className = "navbar navbar-expand-md fixed-top marginAlign scroll";
    } else {
      document.querySelector(".navbar").className = "navbar navbar-expand-md fixed-top marginAlign";
    }
  };
    render() {
        const { moblieNav } = this.state;
        return (
            <div>
                <div className="page-wrapper">
                    <div className="nav-wrapper">
                        <div className="grad-bar"></div>
                        {/* navbar-expand-md navbar-dark fixed-top bg-white */}
                        <div className="container">
                            <nav className="navbar navbar-expand-md fixed-top marginAlign">
                                {/* <img src="https://storage.googleapis.com/crmdevelopment/Organisation/ProfilePic/2020/07/31/starlly_logo.png" alt="Company Logo" /> */}
                                <span ><a href="/" className="navbar-brand comLogo">Spectra</a></span>
                                <div className={moblieNav === true ? "menu-toggle is-active" : "menu-toggle"} onClick={this.moblieNavBar} id="mobile-menu">
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                    <span className="bar"></span>
                                </div>
                                <ul className={moblieNav === true ? "nav mobile-nav" : "nav"} onClick={this.moblieNavBar}>
                                    <li className="nav-item"><a href="#feature">Features </a></li>
                                    <li className="nav-item"><a href="#partners">Partners </a></li>
                                    <li className="nav-item"><a href="#useCases" >Use Cases</a></li>
                                    <li className="nav-item"> <Link to={'/pricing'}>Pricing</Link></li>
                                    <li className="nav-item"><a href="#team">Team</a></li>
                                    <li className="nav-item"><a href="#tryit">Try it</a></li>
                                    <li className="nav-item"><a href="#contactUs">Contact Us</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}