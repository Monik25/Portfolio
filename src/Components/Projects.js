import React from 'react';
import ProjectBox from './ProjectBox';

import HCM from '../images/HCM.jpeg';
import TCS from '../images/TCS.jpeg';


const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Experiences & Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={HCM} projectName="HCM" />
        <ProjectBox projectPhoto={TCS} projectName="TCS" />
        
      </div>

    </div>
  )
}

export default Projects