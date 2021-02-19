import React from "react"
import Fade from "react-reveal/Fade"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container aboutSec">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1 style={{textAlign: 'center'}}>About Me</h1>
            </Fade>
            <p>
            <Fade left big cascade>
              {'I am a dedicated, young Software Engineer who is eager to utilize my skills and continue to grow. I want to deliver the best UI and data storage possible.'}
            </Fade>
              <br></br>
              <Fade left big cascade>
              {'I am a full stack developer who is comfortable with both back-end and front-end work.'}
              </Fade>
              <br></br>
              <Fade left big cascade>
              {"I am a recent graduate of General Assembly's Software Engineering Immersive program, which was an amazing and difficult program. I was challenged every day and learned how to meet goals and perform in a fast paced environment. I look forward to my next steps and the exciting world of software development"}
              </Fade>
            </p>
          </div>
          <div className="image-wrapper">
            <img src={"https://i.imgur.com/k5jZWC1.jpg"} alt="about"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
