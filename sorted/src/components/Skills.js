import React from "react"
import data from "../workData"
import Fade from  "react-reveal/Fade"
import Zoom from 'react-reveal/Zoom';

const Skills = () => {
  return (
    <div className="section" id='skills'>
      <div className="container">
        <div className="skills-container">
            <Fade bottom cascade>
          <h1>Skills</h1>
            </Fade>
            <Zoom bottom cascade>
          <div className="skills-grid">
            {data.skills.map(skill => (
                <div className="skill" key={skill.id}>
                <img src={skill.img} alt="css"></img>
                <p>{skill.para}</p>
              </div>
            ))}
          </div>
            </Zoom>
        </div>
      </div>
    </div>
  )
}

export default Skills
