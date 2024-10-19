import React from 'react'

const Skills = () => {
  return (
    <div  id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                <h2 className='text-4xl md:text-5xl text-cyan-600' data-aos="fade-down">Technologies I work with:</h2>
                <p className='text-gray-500 pt-2' data-aos="fade-down">
                I am working with html,css,typescript,photoshop and ms officeThis combination of technical and creative skills enables me to collaborate effectively with cross-functional teams, streamline processes, and deliver top-notch web solutions that meet both user needs and business objectives.
                </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-cyan-600 text-3xl sm:text-4xl'>
                <div className='space-y-2 '>
                    <h2 data-aos="zoom-in-up">HTML</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                </div>
                <div className='space-y-2 '>
                    <h2 data-aos="zoom-in-up">React</h2>
                    <h2 data-aos="zoom-in-up">MS Office</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
