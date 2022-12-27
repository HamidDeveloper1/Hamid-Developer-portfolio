import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css'
import { Link } from 'react-scroll'
import {themeContext} from '../../Context'
import {useContext} from "react";
// import { useState } from 'react'
const Navbar = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;


    // window.addEventListener('scroll, changeColor')



  return (
    // <div className={color ? 'header header-bg' 'header'}>
        
            <div data-collapse="medium" data-animation="default" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" id='Home' className="n-wrapper">
                                    <div className="n-left">
                                        <a style={{color: darkMode? 'white': ''}} href="www.hamiddeveloper.xyz">
                                        <div className="n-name">Hami<span>d.</span></div>
                                        </a>
                                        <Toggle/>
                                    </div>
                                    <div className="n-right">
                                        <header>
                                            <div className="n-list">
                                                <ul style={{listStyleType:'none'}}>
                                                    <Link spy={true} to= 'Navbar' smooth={true} activeClass="activeClass">
                                                    <a style={{color: darkMode? 'white': ''}} href="www.hamiddeveloper.xyz">
                                                    <li style={{color: darkMode? 'white': ''}}>Home</li>
                                                    </a>
                                                    </Link>
                                                    <Link spy={true} to= 'Services' smooth={true}>
                                                    <li style={{color: darkMode? 'white': ''}}>Services</li>
                                                    </Link>
                                                    <Link spy={true} to= 'Experience' smooth={true}>
                                                    <li style={{color: darkMode? 'white': ''}}>Experience</li>
                                                    </Link>
                                                    <Link spy={true} to= 'LatestWork' smooth={true}>
                                                    <li style={{color: darkMode? 'white': ''}}><samp>Latest</samp>Work</li>
                                                    </Link>
                                                    <Link spy={true} to= 'Testimonials' smooth={true}>
                                                    <li style={{color: darkMode? 'white': ''}}>Testimonials</li>
                                                    </Link>
                                                </ul>
                                            </div>
                                        </header>
                                        <Link to="contact" spy={true} smooth={true}>
                                        <button class="custom-btn btn b-button"><span>Contact us</span></button>
                                        </Link>
                                    </div>
                                    
            </div>
        
    // </div>

  ) 
}

export default Navbar