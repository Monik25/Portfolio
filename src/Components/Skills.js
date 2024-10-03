import React from 'react'; 
import { CgCPlusPlus } from "react-icons/cg";
import {FaReact,FaPython, FaGitAlt, FaGithub, FaNpm, FaHtml5, FaBootstrap,FaConfluence,FaJava} from "react-icons/fa";
import {DiNodejs, DiJavascript1} from "react-icons/di";
import {SiExpress, SiMongodb, SiPostman, SiPython, SiVercel,SiMicrosoftsqlserver} from "react-icons/si";

const Skills = ({skill}) => {
    const icon = {
        'C++': <CgCPlusPlus/>,
        React: <FaReact/>,
        Javascript: <DiJavascript1/>,
        Node : <DiNodejs/>,
        Git : <FaGitAlt/>,
        Github : <FaGithub/>,
        Npm : <FaNpm/>,
        Bootstrap: <FaBootstrap/>,
        Html: <FaHtml5/>,
        Python: <SiPython/>,
        Sql: <SiMicrosoftsqlserver/>,
        Confluence: <FaConfluence/>,
        Java: <FaJava/>
    }
    
  return (
    <div title={skill} className='SkillBox'>
      {icon[skill]}
    </div>
  )
}

export default Skills
