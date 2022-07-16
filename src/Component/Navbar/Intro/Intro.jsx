import React from 'react';
import './Intro.css';
import Github from '../../../img/github.png';
import Linkedin from '../../../img/linkedin.png';
import Space from '../../../img/space.gif';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
        <div className="i-name">
            <span>Hi! I Am</span> <span>Natsinee Tanapornrat </span>
            <span>I'm a software engineer experienced in web developing with a background in digital marketing and customer-services marketing. I'm self-motivated and effective at time management. I would like to improve quality of life of the people in society with technology as well.</span>
        </div>

        <div className='projectgit'>

        <button className=" button i-button">Project</button>
        
        <div className="i-icons">
            
            <a href='https://github.com/ploynatsinee'> <img src={Github} alt="" style={{ height: "42px" }}/>
            </a>
            <a href='https://www.linkedin.com/in/natsinee-tanapornrat-11998a217/'> <img src={Linkedin} alt="" style={{ height: "42px" }} />
            </a>
            
        </div>
        </div>
        </div>
            <div className="i-right">
            <img src={Space} alt="" />
            </div>
    </div>
  )
}

export default Intro