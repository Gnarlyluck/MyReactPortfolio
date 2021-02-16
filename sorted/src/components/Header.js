import React from "react"
import Fade from "react-reveal/Fade"
import headerCss from '../scss/header.scss'

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom>
            <h2>
              Hi, I'm Schuyler Luckey
              <span role="img" aria-label="Emoji">
                👋
              </span>
            </h2>
          </Fade>
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>
                 Building digital
              </h1>
              <h1>
               products, brands"
              </h1>
              <h1>
                and experience
              </h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>I am an up-and-coming Software Engineer from Seattle, Wa. 
                After bartending for close to a decade, I realized it was time for a change when Covid-19 hit. 
                Since I've always had an affinity for computers, design, and technology, 
                I decided to dive into Software Development and become a Full Stack Engineer. 
                Take a look at what I've done below.
            </p>
          </Fade>
          <Fade bottom>
            <a
              href={'mailto: schuylerluckey@gmail.com'}
              className="primary-btn"
            >
              CONNECT WITH ME
            </a>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Header
