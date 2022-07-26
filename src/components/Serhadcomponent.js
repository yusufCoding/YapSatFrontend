import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import kralsero from "./Kralsero.jpg"

const Serhadcomponent = () => {
  return (
    <div>
    <Navbar style={{padding:'20px'}} bg="dark" variant="dark" expand="lg">
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
          <Nav.Link href="#action2">Üye ol</Nav.Link>
          <Nav.Link href="#action2">Giriş</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <div>
    <CardGroup className='text-center' style={{margin:'20px'}}>
      <Card style={{padding:'20px'}}>
        <Card.Img variant="top" src={kralsero}/>
        <Card.Body>
          <Card.Title>Kral Sero</Card.Title>
          <Card.Text>
            850rp
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{padding:'20px'}}>
        <Card.Img variant="top" src={kralsero}/>
        <Card.Body>
          <Card.Title>Normal Sero</Card.Title>
          <Card.Text>
           850rp
          </Card.Text>
        </Card.Body>
      </Card>
      </CardGroup>

      <CardGroup className='text-center' style={{margin:'20px'}}>
      <Card style={{padding:'20px'}}>
        <Card.Img variant="top" src={kralsero}/>
        <Card.Body>
          <Card.Title>Kral Sero</Card.Title>
          <Card.Text>
            850rp
          </Card.Text>
        </Card.Body>
      </Card>

      <Card style={{padding:'20px'}}>
        <Card.Img variant="top" src={kralsero}/>
        <Card.Body>
          <Card.Title>Normal Sero</Card.Title>
          <Card.Text>
           850rp
          </Card.Text>
        </Card.Body>
      </Card>
      
    </CardGroup>
    </div>
    </div>

  );
}

export default Serhadcomponent