import React from 'react'
import './Navbar.css'
import Linux from '../../img/linux.png'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className='n-name'>Natsinee</div>
            <img src={Linux} alt=""/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType: 'none'}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skill</li>
                    <li>Project</li>
                </ul>
            </div>
            <button className='button button-contactme'>Contact Me</button>
            <button className='button button-resume'>Resume</button>
        </div>
    </div>
  )
}

export default Navbar