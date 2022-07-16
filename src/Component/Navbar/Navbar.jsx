import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className='n-name'>Natsinee</div>
            <span>toggle</span> 
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Skill</li>
                    <li>Project</li>
                </ul>
            </div>
            <button className='button'>Contact us</button>
        </div>
    </div>
  )
}

export default Navbar