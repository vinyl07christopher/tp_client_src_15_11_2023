import react from "react";
import { useState } from "react";

import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, Image } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import {Row, Col } from 'react-bootstrap';
import image from "./lens.webp";
import TP from "./TPdetector_logo.png";
import Right from "./Right-img.png";
import Img1 from "./20638.jpg";
import Img2 from "./Img-2.jpg";
import Img3 from "./Img-3.jpg";
import Img4 from "./Img4.jpg";
import Navbar1 from "./Navbar";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

const Home = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const bodyStyle = {
    backgroundColor: "#D9FDFF",
  };

  const navBarStyle = {
    background: "#D9FDFF",
    color: "#000000",
    padding: "10px",
    
  };

  const navbarStyle = {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "light",
    color: "black",
    padding: "10px",
  };

 
  return (
    <form>
      <div style={navBarStyle}>
        <div className="container">
          {" "}
          <br />
          <Navbar expand="lg" style={navbarStyle}>
            <Container>
              <Navbar.Brand href="#home">
                <Image
                  src={TP}
                  alt="TP Detector Logo"
                  style={{ width: "70px", height: "auto" }}
                  className="display-3"
                />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto me-2">
                  <Nav.Link href="./SignUp" className="">
                    Sign-Up
                  </Nav.Link>
                  <Nav.Link href="/Login" className="gx-5">
                    Login
                  </Nav.Link>
                  <Nav.Link href="/SubmitPaper" className="gx-5">
                  Submit Paper

                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <h1 className="text-center" style={{ fontSize: "50px" }}>
            TP Detector
          </h1>
          <br />
         <div > 

          
         <h5 style={{ textShadow: '0.5px 0.5px',fontWeight:'bold' }} className="text-left">
  &nbsp; Human or AI?
</h5>

          <div className="container mt-3">
      <div className="row">
        <div className="col text-left">
          <p>  <Image
                  src={Right}
                  alt="TP Detector Logo"
                  style={{ width: "25px", height: "auto" }}
                  className="display-3"
                />&nbsp; Know the Originality and Authenticity of any Research</p>
          <p> <Image
                  src={Right}
                  alt="TP Detector Logo"
                  style={{ width: "25px", height: "auto" }}
                  className="display-3"
                />&nbsp; TP Detector is a reliable tool to ensure the content's originality, written by a human and AI-generated.</p>
          <p> <Image
                  src={Right}
                  alt="TP Detector Logo"
                  style={{ width: "25px", height: "auto" }}
                  className="display-3"
                />&nbsp; Detect the new Tortured Phrases (TP), Copied and Synthetic Images, and Language Quality in a research paper.</p>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-left mt-4">
  <Button
    className="border border-light text-dark p-3 rounded"
    style={{ backgroundColor: 'lightgreen',textShadow: '0.5px 0.5px' }}
    href="/SubmitPaper"
  >
    Check Your Article
  </Button>
</div>
          <br />
          <h4 style={{ textShadow: '0.5px 0.5px',fontWeight:'bold' }} className="text-left mt-3" >
  &nbsp; Our Features
</h4>
          <div className="container mt-3">
            <p className="lh-lg">
              We offer various features to help our users know the paraphrased
              technical sentences | | tortured phrases generated by using
              Thesaurus or AI tools, check whether or not an image is original |
              | AI-Generated | | Copied, from which original image it has been
              generated from, and which regions of the image have been used
              without citing the original research article.
            </p>
          </div>
         </div>
          <br />
          <div className="container">
            <div className="row">
              <div className="col">
              <h5 style={{ textShadow: '0.5px 0.5px',fontWeight:'bold' }} className="text-left mt-3" >
  &nbsp; TP Detector: You now know the quality of your research
</h5>
                <br />
                <div>
                <Row className="pt-2">
  <Col sm={12} md={6} lg={6}>
    <Card>
      <Card.Img variant="top" src={Img1} height={`300`} />
      <Card.Body>
        <Card.Title style={{ textShadow: '0.4px 0.4px',fontWeight:'bold',fontSize:'1.2rem' }}>Protect your research from Rejection/Retraction</Card.Title>
        <Card.Text className="lh-lg">
        Proofread your article
from the potential for any publisher penalizing AI content and only publish
the research content you know the true Originality of.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col sm={12} md={6} lg={6} >
    <Card>
      <Card.Img variant="top" src={Img2}  height={`280`}/>
      <Card.Body>
        <Card.Title style={{ textShadow: '0.4px 0.4px',fontWeight:'bold',fontSize:'1.2rem' }}>Detect whether the content is AI written</Card.Title>
        <Card.Text className="lh-lg">
        With all tortured phrases and
Research results saved in one place. You will no longer required to rely on
the publisher side quality check or waste time by manually proof-reading it
by yourself.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>
<Row className="pt-2">
<Col sm={12} md={6} lg={6}>
    <Card>
      <Card.Img variant="top" src={Img3} height={`280`} />
      <Card.Body>
        <Card.Title style={{ textShadow: '0.4px 0.4px',fontWeight:'bold',fontSize:'1.2rem' }}>Full Research Analyzer</Card.Title>
        <Card.Text className="lh-lg">
        Scan your entire research article/theme/result
output images to understand the risk of publishing the article that has the
potential of getting flagged as a problematic paper by publisher even after
the publication.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  <Col sm={12} md={6} lg={6}>
    <Card>
      <Card.Img variant="top" src={Img4} height={`280`} />
      <Card.Body>
        <Card.Title style={{ textShadow: '0.4px 0.4px',fontWeight:'bold',fontSize:'1.2rem' }}>Rank better in Research</Card.Title>
        <Card.Text className="lh-lg">
        In various scholarly indexes and engine using our
best-in-class research novelty and quality detection feature ensures you to
produce a high-quality research content and gain more citations.
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
</Row>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </form>
  );
};

export default Home;
