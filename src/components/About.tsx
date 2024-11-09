import React from 'react'
import "../style/about.css"

const About = () => {
  return (
    <div id="about" className="about-container">
      <div className="about-grid">
        <div>
          <h2 className="about-heading about-heading-md">About Me:</h2>
          <p className="about-text">
            Hi! I'm Anoosha, a skilled Frontend Developer with a strong passion
            for crafting dynamic, user-friendly web interfaces. With expertise
            in HTML, CSS, JavaScript, and popular frameworks like React, I focus
            on building responsive and intuitive applications that provide a
            seamless user experience. My keen eye for design, complemented by
            proficiency in Adobe Photoshop, allows me to bring creativity and
            precision to my work, ensuring both form and function in every
            project.
            <br />
            In addition to my development skills, I am well-versed in MS Office
            tools, which enhance my productivity in documentation, data
            analysis, and project coordination. This combination of technical
            and creative skills enables me to collaborate effectively with
            cross-functional teams, streamline processes, and deliver top-notch
            web solutions that meet both user needs and business objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

