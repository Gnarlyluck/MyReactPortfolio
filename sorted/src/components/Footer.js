// import { Zoom } from "@material-ui/core"
import React from "react"
import Fade from "react-reveal/Fade"
import Zoom from 'react-reveal/Zoom';
import data from "../workData"


const Footer = () => {
  return (
    <div className="section" id="contact">
      <div className="container">
        <div className="footer-container">
          <Fade bottom cascade>
            <h1>Contact</h1>
            <h2>{"Let's Create Together"}</h2>
          </Fade>
          <a className="email-link" href={`mailto: schuylerluckey@gmail.com`}>
          </a>
          <div className="social-icons">
            {data.social.map(socialLink => (
              <a
              href={socialLink.url}
              target="_blank"
              rel="noopener noreferrer"
              >
          <Zoom bottom cascade>
                <img src={socialLink.img} alt="icons"></img>
            </Zoom>
              </a>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer
