import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png";
import cube1 from "../../img/cube-1.png"
import cube2 from "../../img/t6.png"

// import Insta from "@iconscout/react-unicons/icons/uil-instagram";
// import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
// import Gitub from "@iconscout/react-unicons/icons/uil-github";
// import Lin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
  return (
    <div className="footer">
        <div className="wave">
         <img src={Wave} alt="" style={{  height: "50rem" , width: "100%"}} />
        </div>
          <div className="f-content">
                    {/* <div className="f-icons">
                        <Gitub color="white" size={"3rem"} />
                        <Lin color="white" size={"3rem"} />
                        <Facebook color="white" size={"3rem"} />
                        <Insta color="white" size={"3rem"} />
                    </div> */}
                        <div class='grid'>
                            
                             <h2 className='name'>Developer Frontend</h2>
                             <h3 className='tophader'>You only have one chance to make a first impression.</h3>
                            
                            

                          
                          <p className='tophader1'>Let's make it an amazing one.</p>
                          <div className="nav-list list">
                               <p className='navhead'>Navigation</p>
                                <ul className='nav-list1'>
                                    <li class="nav-list">
                                        <a href="#Home" class="footer-nav-link">Home</a>
                                    </li>
                                    <li class="nav-list">
                                        <a href="#Services" class="footer-nav-link">Services</a>
                                    </li>
                                    <li class="footer-nav-link">
                                        <a href="#Experience" class="footer-nav-link">Experience</a>
                                    </li>
                                    <li class="nav-list">
                                        <a href="#LatestWork" class="footer-nav-link">LatestWork</a>
                                    </li>
                                    <li class="footer-nav-link">
                                        <a href="#Testimonials" class="footer-nav-link">Testimonials</a>
                                    </li>
                                    <li class="nav-list">
                                        <a href="#contact" class="footer-nav-link">Contact</a>
                                    </li>
                                    <li class="footer-nav-link">
                                        <a href="#Home" class="footer-nav-link">About Me</a>
                                    </li>
                                    <li class="nav-list">
                                        <a href="#LatestWork" class="footer-nav-link">FAQs</a>
                                    </li>

                                </ul>
                            </div>
                            {/* <div><hr color='red' width="435rem" margin-left="10rem"></hr></div> */}
                            
                           

                                
                                   
                                        {/* <p className="topheader">Download Free Resources for any free templates</p> */}
                                    
                                    {/* <ul class='categories1'>
                                        <li><a href='##' title='Download Dark UI Website Templates'>Dark UI free templates</a></li>
                                        <li><a href='##' title='Download Dashboards Website Templates'>Dashboards free templates</a></li>
                                        <li><a href='##' title='Download Website Templates'>Freebies free templates</a></li>
                                        <li><a href='##' title='Download Landing Page Website Templates'>Landing Page free templates</a></li>
                                        <li><a href='##' title='Download Mobile Apps Website Templates'>Mobile Apps free templates</a></li>
                                    </ul>
                                    <ul class='categories2'>
                                        <li><a href='##' title='Download Single Page Website Templates'>Single Page free templates</a></li>
                                        <li><a href='##' title='Download UI Kit Website Templates'>UI Kit free templates</a></li>
                                        <li><a href='##' title='Download Light UI Website Templates'>Light UI free templates</a></li>
                                        <li><a href='##' title='Download Ecommerce Website Templates'>Ecommerce free templates</a></li>
                                        <li><a href='##' title='Download Finance Website Templates'>Finance free templates</a></li>
                                    </ul>
                                    <ul class='categories3'>
                                        <li><a href='##' title='Download Travel Website Templates'>Travel  free templates</a></li>
                                        <li><a href='##' title='Download Online Education Website Templates'>Online Education  free templates</a></li>
                                        <li><a href='##' title='Download Website Website Templates'>Website  free templates</a></li>
                                        <li><a href='##' title='Download SaaS Landing Pages Website Templates'>Landing Pages  free templates</a></li>
                                        <li><a href='##' title='Download Figma Website Templates '>Figma  free templates</a></li>
                                    </ul> */}
                            
                        </div>
                        <div class="copyrights-text">
                                
                                    <p class="small1">© 2020, Hamiddeveloper</p>
                                
                                

                            
                        </div>
                        <a href="#Home" class="backtotop w-inline-block">
                                        <p class="text-small22">Back To Top</p>
                        </a>
                                {/* ......................Intor Design................... */}
                        <div className="cube1">
                        <img src={cube1} alt=""
                            style={{width:"500px"}}

                        />
                        
                        </div>
                        <div className="cube2">
                        <img src={cube2} alt=""
                            style={{width:"300px"}}

                        />
                        
                        </div>
                    
          </div>


    </div>
  )
}

export default Footer