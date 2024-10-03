import React from 'react';
import Skills from './Skills.js';
import Tilt from 'react-parallax-tilt';
import Lottie from "lottie-react"
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
          <p>
            My name is <b>Monik Priyatham Katla</b> .Iam currently pursuing my <b>Masters in Computer Science</b> at <b>California state University Long Beach</b>.<br></br><br></br>
            I have <b>2 years</b> of Experience in <b>software development</b> which include 1.5 years as a <b>Mobile application developer</b> for <b>Honeywell Internationals</b> where I contributed for developing a mobile application Honeywell Connect Mobile.<br></br><br></br>
            Also I have 5 months of experience as <b>systems enginner</b> at <b>Tata consultancy service</b>, dealt with responsive website, testing, debugging and documentation.

          </p>
        </div>

        <div>
          <Tilt>
              <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>

      </div>
      
      <h1 className='SkillsHeading'>Professional Skillset</h1>
      <div className='skills'>
        
        <Skills skill='React' />
        <Skills skill='Node' />
        <Skills skill='Java'/>
        <Skills skill='Javascript' />
        <Skills skill='Python'/>
        <Skills skill='C++' />
        <Skills skill='Git' />
        <Skills skill='Github' />
        <Skills skill='Npm' />
        <Skills skill='Bootstrap'/>
        <Skills skill='Html'/>
        <Skills skill='Sql'/>
        <Skills skill='Confluence'/>

        
      </div>
    </>
  )
}

export default About