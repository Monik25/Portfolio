import React from 'react';

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    HCMDesc: [
      "Developed a comprehensive mobile application using React native for building automation, enabling user to seamlessly connect and manage a wide range of devices.",
      "Implemented versatile features such as alarm scheduling, device locking and real-time overrides, enhancing user control and convenience.",
      "Incorporated a cloud synchronization mechanism to persist user settings between login sessions. Involved in debugging sessions with testers and cloud support team."
    ],
    HCMWebsite: "https://www.honeywell.com/us/en",
    HCMYear: "Sep 2021 - Dec 2022",

    TCSDesc: "Contributed developing web pages using ReactJS and Implemented templates to reuse in the project for the client. Maintained good Code refactoring mechanism, debugging, resolving bugs and code optimization.",
    TCSWebsite: "https://www.tcs.com/",
    TCSYear: "June 2021 - Sep 2021"
  };

  return (
    <div className='projectBox'>
      <a href={desc[projectName + 'Website']} target='_blank' rel="noopener noreferrer">
        <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      </a>
      <div align='left'>
        <br />
        <h3>{projectName} <br /><b>{desc[projectName + 'Year']}</b></h3>
        <br />
          {desc[projectName + 'Desc']}
        <br />
      </div>
    </div>
  );
};

export default ProjectBox;
