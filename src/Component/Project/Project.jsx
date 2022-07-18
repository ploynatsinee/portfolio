import React from 'react';
import './Project.css';
import Card from 'react-bootstrap/Card';


const Project = () => {
    return (
      <div className="project " id="Project">
          <Card style={{ width: '18rem' }} className="Card">
          <Card.Body className='cardbody'>
            <Card.Title className='cardtitle'>User Lists</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">API website</Card.Subtitle>
            <Card.Text>
            Project use React with JavaScript to build list of user data with Rest API.<br></br><br></br>
            <img className='img-project' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            <img className='img-project' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </Card.Text>
            <Card.Link href="https://github.com/ploynatsinee/React---REST-API-UserLists">See on Github</Card.Link>
            
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="Card">
          <Card.Body className='cardbody'>
            <Card.Title className='cardtitle'>Go Thailand</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Travel website</Card.Subtitle>
            <Card.Text>
            Project use HTML5, CSS, JavaScript to build "Go Thailand" travel website.<br></br><br></br>
            <img className='img-project' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            <img className='img-project' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
            <img className='img-project' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </Card.Text>
            <Card.Link href="https://github.com/ploynatsinee/HTML-CSS-JS-goThailand-">See on Github</Card.Link>
            {/* <Card.Link href="#">Another Link</Card.Link> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="Card">
          <Card.Body className='cardbody'>
            <Card.Title className='cardtitle'>Build RESTFUL API</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Students data</Card.Subtitle>
            <Card.Text>
            Project in Go programing Languages to build RESTFUL API of students data.<br></br><br></br>
            <img className='img-project' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg" />
            </Card.Text>
            <Card.Link href="https://github.com/ploynatsinee/ProjectRESTful-API-StudentsData-with-Go-and-Gin">See on Github</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="Card">
          <Card.Body className='cardbody'>
            <Card.Title className='cardtitle'>FitFriends</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Exercise website</Card.Subtitle>
            <Card.Text>
            Project use React with JavaScript to build Social Media Exercise website. I'm working on it. Expected finish in August.<br></br><br></br>
            <img className='img-project' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg" />
            <img className='img-project' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
            </Card.Text>
            <Card.Link href="https://github.com/ploynatsinee">See on Github</Card.Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }} className="Card">
          <Card.Body className='cardbody'>
            <Card.Title className='cardtitle'>TeaCozy</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">bakery shop website</Card.Subtitle>
            <Card.Text>
            Project use HTML5, CSS to build a frontend of bakery shop website.<br></br><br></br>
            <img className='img-project' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg" />
            <img className='img-project' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg" />
            </Card.Text>
            <Card.Link href="https://github.com/ploynatsinee/html-css-teacozy">See on Github</Card.Link>
          </Card.Body>
        </Card>
        
    </div>
  )
}

export default Project