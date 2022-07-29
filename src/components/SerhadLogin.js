import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import backgroundCity from "./backgroundCity.jpg"

const SerhadLogin = () => {

  return (

    <div style={{backgroundImage: `url(${backgroundCity})`,backgroundSize:'1200px'}}>
          <div>
    <Navbar style={{padding:'20px',}} bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Yapsat</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>         
            <Nav.Link href="#action1">Home</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="#action1">Üye ol</Nav.Link>
          <Nav.Link href="#action1">Giriş</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <br></br>
    </div>

      <div style={{marginRight:"300px",marginLeft:"300px",marginTop:"40px"}}>
        <Card shadow="dark" style={{padding:"20px" , boxShadow: '3px 3px 9px #2F74AB'}}>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card>
    </div>
    </div>
  )
}

export default SerhadLogin