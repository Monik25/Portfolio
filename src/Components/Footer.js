import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Monik Priyatham Katla</h4>
      <div className='footerLinks'>
        <a href="https://www.linkedin.com/in/katla-monik-priyatham/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:katlamonik26@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer