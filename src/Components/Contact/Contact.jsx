import { useRef, useState } from "react";
import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import email from '../../img/email.svg'
import propertylocation from '../../img/property-location.svg'
import mobilechat from  '../../img/mobile-chat.svg'



import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Lin from "@iconscout/react-unicons/icons/uil-linkedin";
import {themeContext} from '../../Context'
import {useContext} from "react";
const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_49vuef2', 'template_xnhecxf', form.current, '06LwiwIomgmhpupFw')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  

  return (
    <div className="contact-form" id="contact">
          <div id="Contact" class="section section-contact wf-section">

            <div class="contact-wrap">
                    <div class="grid-contact-info">
                    
                        <h2 class="text">Get Custom Design & WordPress Design for your project</h2>
                        <p class="h5">I’d love to meet up with you to discuss your venture, and potential collaborations.</p>
                        <div class="infot">
                            <div class="contact-info">
                              <img src={email} loading="lazy" alt="Hamiddeveloper Email" class="contact-info-image"/>
                                <div class="contact-item-details">hamiddeveloper1@gmail.com</div>
                            </div>
                            <div class="contact-info">
                              <img src={propertylocation} loading="lazy" alt="Hamiddeveloper Address" class="contact-info-image"/>
                                <div class="contact-item-details">Mirpur1, Dhaka, Bangladesh</div>
                            </div>
                            <div class="contact-info"><img src={mobilechat} loading="lazy" alt="Hamiddeveloper Phone" class="contact-info-image"/>
                                <div class="contact-item-details">+880 1787-XXXXXX</div>
                            </div>
                        
                    </div>
                    
                    <div class="contact-form-side-wrap">
                        <div class="w-embed w-iframe w-script">
                             {/* left side copy and paste from work section */}
                              <div className="w-left">
                                <div className="awesome">
                                  <span style={{color: darkMode? 'white': ''}}>Get in Touch</span>
                                  <span>Contact me...</span>
                                  <div
                                    // className="blur s-blur1"
                                    style={{ background: "#ABF1FF94" }}
                                  ></div>
                                </div>
                              </div>
                              {/* right side form */}
                              <div className="c-right">
                                <form ref={form} onSubmit={sendEmail}>
                                  <input type="text" name="user_name" className="user"  placeholder="Name"/>
                                  <input type="email" name="user_email" className="user" placeholder="Email"/>
                                  <textarea name="message" className="user" placeholder="Message"/>
                                  <input type="submit" value="Send" className="custom-btn btn button"/>
                                  <span>{done && "Thanks for Contacting me!"}</span>
                                  <div
                                    className="blur c-blur1"
                                    style={{ background: "var(--purple)" }}
                                  ></div>
                                </form>
                              </div>
                        </div>
                    </div>
                   </div>
                <div class="footer-social">
                    <div class="footer-social-item">
                        <a href="https://github.com/"  class="footer-social-link w-inline-block"><Gitub color="#fdc50f" size={"3rem"} loading="lazy" alt="Hamiddeveloper on Github" class="footer-social-link-image"/>

                    </a>
                    </div>
                    <div class="footer-social-item">
                        <a href="https://www.facebook.com/" class="footer-social-link w-inline-block">
                        <Lin color="#fdc50f" size={"3rem"} loading="lazy" alt="Hamiddeveloper on Facebook" class="footer-social-link-image"/>

                    </a>
                    </div>
                    <div class="footer-social-item">
                        <a href="https://www.linkedin.com/" class="footer-social-link w-inline-block">
                        <Facebook color="#fdc50f" size={"3rem"} loading="lazy" alt="Hamiddeveloper on linkedin" class="footer-social-link-image"/>
                    </a>
                    </div>
                    <div class="footer-social-item">
                        <a href="https://www.instagram.com/" class="footer-social-link w-inline-block">
                        <Insta color="#fdc50f" size={"3rem"} loading="lazy" alt="Hamiddeveloper on Instagram" class="footer-social-link-image"/>
                    </a>
                    </div>
                </div>
            </div>
            </div>






























  </div>
);
};
  


export default Contact