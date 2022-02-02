import React from "react";
import GitHub from "./images/githubLogo.png";
import LinkedIn from "./images/linkedinLogo.png";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container' ;
import ScottPic from './images/Scott_aboutUS.jpeg';
import JuliaPic from './images/Julia_aboutUS.jpeg';
import MikePic from './images/Mike_aboutUS.jpeg';
import pofolio_logo from './images/portfolio.png';
import { Card, Col, Row } from "react-bootstrap";
import "./About.css";

function About() {
  return (
    <>
        <Container className ="profileCard">
            <Row>
                <Col>
                <Card>
                    {/* Julia Profile */}
                    <Container className = "pb-3">
                        <Row>
                            <Col>
                                <Image className="profilePic" src={JuliaPic} alt="Profile Pic" rounded />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Julia Szymanski</h4>
                                <h3>Full Stack Web Developer</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/julia-szymanski-3555a7b9">
                                <img className="about-logo" src={LinkedIn} alt="LinkedIN Logo"></img>
                            </a>
                            <a href="https://github.com/julszymanski">
                                <img className="about-logo m-2" src={GitHub} alt="GithubLogo"></img>
                            </a>
                            <a href = "https://js-my-portfolio-react.herokuapp.com/">
                                <img className = "about-logo" src = {pofolio_logo} alt = "PorfolioLink" />
                            </a>
                            </Col>
                        </Row>
                    </Container>
                    </Card>
                </Col>
                <Col>
                <Card>
                    {/* Mike Profile */}
                    <Container className = "pb-3">
                        <Row>
                            <Col>
                                <Image className="profilePic" src={MikePic} alt="Profile Pic" rounded />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Mike Woolf</h4>
                                <h3>Full Stack Web Developer</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/mwoolfdev/">
                                <img className="about-logo" src={LinkedIn} alt="LinkedIN Logo"></img>
                            </a>
                            <a href="https://github.com/mwoolf87">
                                <img className="about-logo m-2" src={GitHub} alt="GithubLogo"></img>
                            </a>
                            <a href = "https://mwoolfdev.netlify.app/">
                                <img className = "about-logo" src = {pofolio_logo} alt = "PorfolioLink" />
                            </a>
                            </Col>
                        </Row>
                    </Container>
                    </Card>
                </Col>
                <Col>
                <Card>
                    {/* Scott Henderson profile */}
                    <Container className = "pb-3">
                        <Row>
                            <Col>
                                <Image className="profilePic" src={ScottPic} alt="Profile Pic" rounded />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h4>Scott Henderson</h4>
                                <h3>Full Stack Web Developer</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                            <a href="https://www.linkedin.com/in/scottmchenderson/">
                                <img className="about-logo" src={LinkedIn} alt="LinkedIN Logo"></img>
                            </a>
                            <a href="https://github.com/smhenderson89/">
                                <img className="about-logo m-2" src={GitHub} alt="GithubLogo"></img>
                            </a>
                            <a href = "https://scotthenderson.netlify.app/">
                                <img className = "about-logo" src = {pofolio_logo} alt = "PorfolioLink" />
                            </a>
                            </Col>
                        </Row>
                    </Container>
                    </Card>
                </Col>
            </Row>
            
        </Container>
    </>
  );
}

export default About;

// Scott_aboutUS.jpeg  import logo from './logo.png
