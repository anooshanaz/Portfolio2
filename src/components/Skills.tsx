import React from 'react'
import "../style/skills.css"

const Skills = () => {
    return (
      <div id="skills" className="skills-container">
        <div className="skills-grid grid grid-cols-2">
          <div>
            <h2 className="skills-heading skills-heading-md" data-aos="fade-down">
              Technologies I work with:
            </h2>
            <p className="skills-text" data-aos="fade-down">
              I am working with HTML, CSS, TypeScript, Photoshop, and MS Office. This combination of technical and
              creative skills enables me to collaborate effectively with cross-functional teams, streamline processes, and
              deliver top-notch web solutions that meet both user needs and business objectives.
            </p>
          </div>
          <div>
            <div className="technologies-grid technologies-grid-sm">
              <div className="space-y-2">
                <h2 data-aos="zoom-in-up">HTML</h2>
                <h2 data-aos="zoom-in-up">CSS</h2>
                <h2 data-aos="zoom-in-up">TypeScript</h2>
              </div>
              <div className="space-y-2">
                <h2 data-aos="zoom-in-up">React</h2>
                <h2 data-aos="zoom-in-up">MS Office</h2>
                <h2 data-aos="zoom-in-up">Next.js</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Skills;
  
