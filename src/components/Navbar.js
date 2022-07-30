import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";

const Navbarcomponent = () => {
    const navigate = useNavigate();
    const navigateLog = () => {
      navigate("/login");
    }
    const navigateReg = () => {
      navigate("/register");
    }
    const navigateYS = () => {
        navigate("/ys");
      }
  return (
    <div>
    <Navbar style={{padding:'20px'}} bg="dark" variant="dark" expand="lg">
    <Container fluid>
      <Navbar.Brand><button onClick={navigateYS}>Yapsat</button></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll>         
          <Nav.Link href="#action1">Home</Nav.Link>
        </Nav>
        <Nav>
        <Nav.Link onClick={navigateReg}>Üye ol</Nav.Link>
        <Nav.Link onClick={navigateLog}>Giriş</Nav.Link>

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>
  )
}

export default Navbarcomponent