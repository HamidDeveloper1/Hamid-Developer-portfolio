import React from 'react'
import './Card.css'
const Card = ({emoji, heading, detail}) => {
  return (
        <div className="card">
            <img src={emoji} alt=''/>
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">LEARN MORE</button>
            <div className="blur s-blur2" style={{background: "#edd0ff",top: '1rem' ,width: '20rem' ,height: '10rem' ,left: '1rem'}}></div>
        </div>
  )
}

export default Card