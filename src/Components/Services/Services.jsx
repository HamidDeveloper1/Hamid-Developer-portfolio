import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './resume.pdf'
import {themeContext} from '../../Context'
import {useContext} from "react";
import { motion } from 'framer-motion'


const Services = () => {

    const transition = {duration : 1, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* ...................left side............. */}
        <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>My Awesome</span>
            <span>services</span>
            <spane>Frontend Developer with a high level of experience in web designing and development,
                <br/>
                WordPress expert, producing the Quality work
            </spane>
            <a href={Resume} download >
            <button className="cta secondary-cta"> Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#C1F5FF" }}></div>
        </div>
        {/* ............right side................................ */}
        <div className="cards">
            <motion.div 
            whileInView={{left: '43rem'}}
            initial={{left: '25'}}
            transition={transition}
            
            style={{left: '46rem'}}>
                <Card
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd,"}
                />
           
            </motion.div>
                  {/* ..........second card;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;.......... */}
            <motion.div 
            whileInView={{left: '25rem'}}
            initial={{left: '55rem'}}
            transition={transition}
            
            style={{ top: "56rem", left: "28rem" }}>
              <Card
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {"Html, Css,JavaScript, React"}
                />
            </motion.div>   
            {/* .............3rd card;;;;;;;;;;;;;;;;;;;;;;............ */}
            <motion.div 
            whileInView={{left: '42rem'}}
            initial={{left: '55rem'}}
            transition={transition}
            
            style={{ top: "67rem", left: "44rem" }}>
              <Card
                    emoji = {Humble}
                    heading = {'UI/UX'}
                    detail = {"Html, Css,JavaScript, React"}
                />
            </motion.div>

        </div>
    </div>
    

   
    
  )
}

export default Services