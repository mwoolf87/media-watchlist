import React from "react";
//  import { Scott_aboutUS } from "./../../public/Scott_aboutUS.jpeg";
import GitHub from "./Images/githubLogo.png";
import LinkedIn from "./Images/linkedinLogo.png";
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container' ;
import ScottPic from './Images/Scott_aboutUS.jpeg';
import JuliaPic from './Images/Julia_aboutUS.jpeg';
import MikePic from './Images/Mike_aboutUS.jpeg';
import { Col, Row } from "react-bootstrap";

function About() {
  return (
    <>
        <Container className = "overall">
            <Row>
                <Col>
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
                            <a href="https://www.linkedin.com/in/julia-szymanski-3555a7b9/">
                                <img className="about-logo" src={LinkedIn} alt="LinkedIN Logo"></img>
                            </a>
                            <a className = "p-3" href ="#">Contact</a>
                            <a href="https://github.com/julszymanski">
                                <img className="about-logo" src={GitHub} alt="GithubLogo"></img>
                            </a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    {/* Mike Profile */}
                    <Container className = "pb-3">
                        <Row>
                            <Col>
                                <Image className="profilePic" src={MikePic} alt="Profile Pic" rounded />
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
                            <a href="https://www.linkedin.com/in/mwoolfdev/">
                                <img className="about-logo" src={LinkedIn} alt="LinkedIN Logo"></img>
                            </a>
                            <a className = "p-3" href ="#">Contact</a>
                            <a href="https://github.com/mwoolf87">
                                <img className="about-logo" src={GitHub} alt="GithubLogo"></img>
                            </a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
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
                            <a className = "p-3" href ="mailto:scott.mc.henderson@gmail.com">Contact</a>
                            <a href="https://github.com/smhenderson89">
                                <img className="about-logo" src={GitHub} alt="GithubLogo"></img>
                            </a>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            
        </Container>

      
    </>
  );
}

export default About;

// Scott_aboutUS.jpeg  import logo from './logo.png
