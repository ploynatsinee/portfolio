import React from 'react';
import './Intro.css';
import Github from '../../../img/github.png';
import Linkedin from '../../../img/linkedin.png';
import Space from '../../../img/space.gif';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <div className="intro" id="Intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span> <span>Natsinee Tanapornrat </span>
          <span>I'm experienced in Full-stack web development with container technologies such as Docker and am interested in cloud technology. I’m self-motivated and effective at time management. I can work in a scrum and agile environment and look forward to working with a company that creates innovations for society. Apart from contributing innovative and edge-cutting things to the world, I would like to improve the quality of life of the people in the community with technology as well.</span>
        </div>

        <div className='projectgit'>
          <Link spy={true} to="Project">
            <button className=" button i-button">Project</button>
          </Link>
          <div className="i-icons">

            <a href='https://github.com/ploynatsinee'> <img src={Github} alt="" style={{ height: "42px" }} />
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