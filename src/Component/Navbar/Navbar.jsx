import React from 'react'
import './Navbar.css'
import Linux from '../../img/linux.png'
import {Link} from 'react-scroll';

function Navbar() {
  return (
    <div className="n-wrapper" id="Nav">
        <div className="n-left">
            <div className='n-name'>Natsinee</div>
            <img src={Linux} alt=""/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                
                <Link spy={true} to="Navbar" smooth={true} activeClass="activeClass">
                    <li>Home</li>
                </Link>
                <Link spy={true} to="Intro">
                    <li>About</li>
                </Link>
                <Link spy={true} to="Skill">
                    <li>Skill</li>
                </Link>
                <Link spy={true} to="Project">
                    <li>Project</li>
                </Link>
                   
                </ul>
            </div>
            <Link spy={true} to="Contact">
            <button className='button button-contactme'>Contact Me</button> 
                </Link>
            
            <a href='https://drive.google.com/file/d/1-EksKnbXjcT-4O97YFMlojSig9CXQHGg/view?usp=sharing'><button className='button button-resume'>Resume</button></a>
            
        </div>
    </div>
  )
}

export default Navbar