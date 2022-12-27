import React from 'react'
import './Intro.css'
import Github from '../../img/github.png'
import Linkedin from '../../img/linkedin.png'
import  Instagram from '../../img/instagram.png'
import circul from '../../img/Vector1.svg'
import  boy from '../../img/boy.png'
import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import glassesimoji from '../../img/glassesimoji.png'
import landing from '../../img/landing-pages.png'
import App from "../../img/apps.png"
import Ads from "../../img/digital-ads.png"
import cub from "../../img/cube.png"
import s1 from "../../img/s1-header.png"
import bucket2 from "../../img/bucket2.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import {themeContext} from '../../Context'
import {useContext} from "react";
import { motion } from 'framer-motion'
const Intro = () => {

    // Transition
    const transition = { duration: 2, type: "spring" };

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
                <span>Hamidul Islam</span>
                <span>I'm a freelancer web designing & development. Let's work together</span>
            </div>
             <button className="i-button custom-btn btn a-button">Hire me</button>
            <div className="i-icons">
              <a href="https://github.com/HamidDeveloper1" >
               <img src={Github} alt=""/>
              </a>
              <img src={Linkedin} alt=""/>
              <img src={Instagram} alt=""/>
            </div>
        </div>
        <div className="i-right">
              <img src={circul} alt=""/>
              <img src={boy} alt=""/>
              <motion.img 
              initial={{ left: "-36%" }}
              whileInView={{ left: "-24%" }}
              transition={transition}
              
              src={glassesimoji} alt=""/>
                <motion.div 
                initial={{top: '-4%', left: '74%'}}
                whileInView={{left: '68%'}}
                transition={transition}
                
                style={{top: '-6%', left: '73%'}}
                className="floating-div floating-div1">
                  <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
                </motion.div>
                <motion.div 
                initial={{left: '10rem', top: '17.5rem'}}
                whileInView={{left: '7rem'}}
                transition={transition}
                
                style={{top: '18.6rem', left: '3.9rem'}} 
                className="floating-div floating-div2"
                >
                  <FloatingDiv image={thumbup} txt1='Best Desing' txt2='Award'/>
                </motion.div>
                  <motion.div
                  initial={{left: '-12rem', top: '12rem'}}
                  whileInView={{left: '1rem'}}
                  transition={transition}
                  
                  style={{width:"9.3rem" ,top: '18.6rem', left: '3.9rem'}}
                  className="floating-div floating-div33"
                  >
                    <FloatingDiv  txt1='👋Design & Development Director'
                    txt2='@Hamidul Islam'/>
                  </motion.div>
          {/* ................Blur divs............. */}
      <div className="blur blur-1" style={{background: "rgb(238 210 255)"}}></div>
      <div className="blur" style={{background: '#C1F5FF' ,top: '17rem' ,width: '21rem' ,height: '11rem' ,left: '-9rem'}}></div>
          {/* .....................inading-page............. */}
        </div>
        <motion.div className="landing-pages"
        initial={{left: '-5rem', top: '12rem'}}
        whileInView={{left: '-1rem'}}
        transition={transition}
        >
        <img
        style={{width:"6.5rem",
        }} 
        src={landing} alt=""/>
        <p>Landing Pages</p>
        </motion.div>
        <motion.div className="Mobile-Apps" loading="lazy"
        initial={{left: '-12rem', top: '12rem'}}
        whileInView={{left: '1rem'}}
        transition={transition}
        >
        <img
        style={{width:"6.5rem",
        }} 
        src={App} alt=""/>
        <p>Mobile Apps</p>
        </motion.div>
        <motion.div className="Digital-Ads" loading="lazy"
        initial={{left: '-12rem', top: '12rem'}}
        whileInView={{left: '1rem'}}
        transition={transition}
        >
        <img
        style={{width:"5rem",
        }} 
        src={Ads} alt=""/>
        <p>Digital Ads</p>
        </motion.div>
        {/* ......................Intor Design................... */}
          <div className="cube">
            <img src={cub} alt=""
              style={{width:"128px"}}

            />
            
          </div>
          <div className="s1">
            <img src={s1} alt=""
              style={{width:"63px"}}

            />
          </div>
          <div className="bucket2">
            <img src={bucket2} alt=""
              style={{width:"326px"}}

            />
          </div>
    </div>
  )
}

export default Intro