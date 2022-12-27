import React from 'react'
import './Work.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
// import achievement from "../../img/achievement-orna2.png"
import {themeContext} from '../../Context'
import {useContext} from "react";
import { motion } from 'framer-motion'
const Work = () => {

    // const transition = {duration : 1, type: 'spring'}

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="Works">
        <div className="awesome">
            <span className='text1' style={{color: darkMode? 'white': ''}}>Works for All These</span>
            <span className='text2'>Brands & Clients</span>
            <spane className='text3'>Lorem ipsum is simpley dummy text of printing of printing Lorem
                <br/>
                Lorem is simpley dummy text of printing
                <br/>
                Lorem ipsum is simpley dummy text of printing of printin
                <br/>
                Lorem ipsum is simpley dummy text
            </spane>
            
            <button className="custom-btn btn s-button">Hire me</button>
            <div className="blur s-blur1" style={{ background: "#C1F5FF" }}></div>
        </div>
        {/* right side......................... */}
        <div className="w-right">
            <motion.div 
            initial={{rotate: 45 }}
            whileInView={{ rotate: 0 }}
            viewport={{margin: '-40px'}}
            transition={{duration: 3.5, type: 'spring'}}
            
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>{" "}
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </motion.div>
            {/* background Circle..................................... */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
        {/* ......................Intor Design................... */}
        {/* <div className="achievement">
                <img src={achievement} alt=""
                    style={{width:"120px"}}

                    />
         </div> */}
    </div>
  )
}

export default Work