import React from 'react';
import Lottie from  "lottie-react";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";
import AnimationDev from "../LottieFiles/AnimationDev.json";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Monik Priyatham Katla</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={AnimationDev} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I am fluent in <b>Python, Java </b> and have corporate real world experience in <b>React native, ReactJS,  and Full statck development</b>.I like more challenging tasks where I can explore and gain new knowledge and add to my repo.
            <br>
            </br>Also, <br>
            </br>I love <b>coffee</b> 
            <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home