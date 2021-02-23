import React from "react"
import Fade from "react-reveal/Fade"

const Promotion = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="promotion-container">
          <Fade bottom cascade>
            <h1>{'My Brand'}</h1>
          </Fade>
          <Fade >
          <p>{"I am a sharp-eyed software engineer that enjoys debugging code. Due to my 8 years of bar tending experience I am naturally efficient, organized, and clean which translates easily into my work as a full stack and application developer."}</p>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Promotion
