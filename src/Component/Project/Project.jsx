import React from "react";
import "./Project.css";
import Card from "react-bootstrap/Card";

const Project = () => {
  return (
    <div className="project " id="Project">
      <Card style={{ width: "18rem" }} className="Card">
        <Card.Body className="cardbody">
          <Card.Title className="cardtitle">
            Wep App with Authentication and SMTP Server
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            QTo-do App with Authentication and SMTP Server
          </Card.Subtitle>
          <Card.Text>
            Created a Full-Stack web application with Backend authentication
            service to handle user authentication like sign up, sign in and sign
            out with cookie JSON Web Token and SMTP Server for validation email
            with end-to end test with cypress.<br></br>
            <br></br>
            <br></br>
            <strong>Tech Stack</strong>
            <br></br>
            NextJS, Typescript, Javascript, React, PosegresSQL, Docker, Cypress
          </Card.Text>
          <Card.Link href="https://github.com/ploynatsinee/todo-nextjs-natsinee">
            See on Github
          </Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }} className="Card">
        <Card.Body className="cardbody">
          <Card.Title className="cardtitle">
            Activity tracker: Fit friends
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Activity tracker web site
          </Card.Subtitle>
          <Card.Text>
            Created a Full-stack web application with full CRUD functionality
            built using react, mongoDB, and mongoose where users can keep track
            of their exercise habits. This website make the users experience of
            working out seamless and attractive as well as changed the exercise
            to be an enjoyable habit.<br></br>
            <br></br>
            <br></br>
            <br></br>
            <strong>Tech Stack</strong>
            <br></br>
            NodeJS, ReactJS, Javascript, MongoDB, Fixma
          </Card.Text>
          <Card.Link href="https://github.com/ploynatsinee/Finalproject-FitFriends-Frontend">
            <br></br>
            See on Github
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Project;
