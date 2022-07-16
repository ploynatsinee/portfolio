import React from 'react';
import './Project.css';

const Project = () => {
    return (
      <div className="project ">
        <div className="card">
            <div className="projectcard-name">
                <span>User Lists</span> <span>API website</span>
             <span> Project use React with JavaScript to build list of user data with Rest API </span>
             {/* //ใส่วีดีโอด้วย */}
             <div className='projectcard-tool'>
            <span>React</span>
            <span>JavaScript</span>
            </div>

            <div className="projectcard-name">
                <span>Go Thailand</span> <span>Travel website</span>
             <span>Project use HTML5, CSS, JavaScript to build "Go Thailand" travel website</span>
             <div className='projectcard-tool'>
            <span>HTML5</span>
            <span>CSS</span>
            <span>JavaScript</span>
            </div>
        
        
            
            
            {/* <a href='https://github.com/ploynatsinee'> <img src={Github} alt="" style={{ height: "42px" }}/>
            </a>
            <a href='https://www.linkedin.com/in/natsinee-tanapornrat-11998a217/'> <img src={Linkedin} alt="" style={{ height: "42px" }} />
            </a> */}
            
            </div>
        </div>
    </div>
    </div>
  )
}

export default Project