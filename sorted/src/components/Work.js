import React from "react"
import Card from "./Card"
import Fade from "react-reveal/Fade"
import data from '../workData'
// import styles from '../scss/work.scss'
const Work = () => {
  return (
    <div className="section" id="work">
      <div className="container">
        <div className="work-wrapper">
          <Fade bottom>
            <h1>Portfolio</h1>
          </Fade>
          <div className="grid">
            <Fade bottom cascade>
              {data.projects.map(project => (
                <Card
                  key={project.id}
                  heading={project.title}
                  paragraph={project.para}
                  imgUrl={project.imageSrc}
                  projectLink={project.url}
                ></Card>
              ))}
            </Fade>
          </div>
          <a
              href={'https://github.com/Gnarlyluck'}
              className="primary-btn"
              style={{borderRadius: '20px'}}
            >
              GitHub
            </a>
        </div>
      </div>
    </div>
  )
}

export default Work