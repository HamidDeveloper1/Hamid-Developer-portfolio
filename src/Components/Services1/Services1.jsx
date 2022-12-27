import React from 'react'
import "./Services1.css"
import Webdesign from '../../img/Webdesign.png'
import Landingpages from '../../img/Landingpages.png'
import Mobileui from '../../img/Mobileui.png'
import Webdevelopment from '../../img/WebDevelopment.jpg'
import wordpress from "../../img/wordpress.jpg"
import wordpressthemes from '../../img/wordpressthemes.webp'
import bucket from "../../img/bucket.png"
import sqaure from "../../img/sqaure.png"
import {themeContext} from '../../Context'
import {useContext} from "react";

const Services1 = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
  return (
                <div class="skills-box" id='Services'>
                        <h1 class="heading" style={{color: darkMode? '#788097': ''}}>
                        We know that good design mean good business
                        </h1>
                        <h2 className="heading-2" style={{color: darkMode? '#FCA61F': ''}}>
                        Let me help you
                        </h2>
                            <div className="Services-section">
                                <div class="Services Services1">
                                    <img src={Webdesign} loading="lazy" width="202"  alt="" />
                                    <h4 class='head' style={{color: darkMode? '#788097': ''}}>Web Design</h4>
                                    <div className="text">
                                    <p style={{color: darkMode? '#FCFAFF': ''}}>
                                    Good website design means great impression on your visitor. We can design modern websites which will help you reach your conversion goal.
                                    </p>
                                    </div>
                                </div>
                                <div class="Services Services2">
                                    <img src={Landingpages} loading="lazy" width="202"  alt="" />
                                    <h4 class='head' style={{color: darkMode? '#788097': ''}}>Landing Pages</h4>
                                    <div className="text">
                                    <p style={{color: darkMode? '#FCFAFF': ''}}>
                                    Landing pages are great tool for conversions. We can design nice landing pages that increase your conversion rate and maximize your revenue.
                                    </p>
                                    </div>
                                </div>
                                <div class="Services Services3">
                                    <img src={Webdevelopment} loading="lazy" width="202"  alt="" />
                                    <h4 class='head' style={{color: darkMode? '#788097': ''}}>Web development</h4>
                                    <div className="text">
                                    <p style={{color: darkMode? '#FCFAFF': ''}}>
                                    Web development a Powerful Tool For Business Growth. Website development is important, we know it is more than ever. 
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="Services-section">
                                <div class="Services Services4">
                                    <img src={Mobileui} loading="lazy" width="202"  alt="" />
                                    <h4 class='head' style={{color: darkMode? '#788097': ''}}>Mobile UI</h4>
                                    <div className="text">
                                    <p style={{color: darkMode? '#FCFAFF': ''}}>
                                    Mobile apps are now a must for most businesses. We can design mobile apps that your user will fall in love with.
                                    </p>
                                    </div>
                                </div>
                                <div class="Services Services5">
                                    <img src={wordpress} loading="lazy" width="202"  alt="" />
                                    <h4 class='head' style={{color: darkMode? '#788097': ''}}>WordPress Expert</h4>
                                    <div className="text">
                                    <p style={{color: darkMode? '#FCFAFF': ''}}>
                                    Expert WordPress developer for any theme or plugin you like to professional, eye-catchy, pixel-perfect & producing Quality work.
                                    </p>
                                    </div>
                                </div>
                                <div class="Services Services6">
                                    <img src={wordpressthemes} loading="lazy" width="202"  alt="" />
                                    <h4 class='head' style={{color: darkMode? '#788097': ''}}>Wordpress Themes</h4>
                                    <div className="text">
                                    <p style={{color: darkMode? '#FCFAFF': ''}}>
                                    Expert WordPress developer for Divi, Astra, Ultra, Avada, SeedProd, OceanWP, StudioPress, Soledad, Neve, Exponent, any theme or plugin.
                                    </p>
                                </div>
                                </div>
                            </div>
                            <div className="stats-bio">
                                <p className="text-2">
                                There are an estimated 20 million eCommerce sites across the entire globe, with more and more being created every single day. Did you know that 99% of them won’t make any profit? We have helped many to be in the other 1%.
                                </p>
                                <h3 className='span'>We can help you!</h3>
                            </div>
                            {/* ......................Intor Design................... */}
                            <div className="bucket">
                                    <img src={bucket} alt=""
                                        style={{width:"455px"}}

                                    />
                            </div>
                            <div className="sqaure1">
                                    <img src={sqaure} alt=""
                                        style={{width:"120px"}}

                                    />
                            </div>
                    


                </div>
  )
}

export default Services1