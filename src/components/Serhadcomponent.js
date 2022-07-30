import React from 'react'
import "./Serhadcomponent";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import kralsero from "./Kralsero.jpg"
import { useNavigate } from "react-router-dom";
import backgroundCity from "./backgroundCity.jpg"

const Serhadcomponent = () => {
  const navigate = useNavigate();
  const navigateLog = () => {
    navigate("/login");
  }
  const navigateReg = () => {
    navigate("/register");
  }
  
  return (

    <div className='w-full h-full bg-zinc-900/90'>
    <img className='absolute w-full h-full  mix-blend-overlay' src={backgroundCity} alt="/" />
    <br></br>
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
    <br></br>
    </div>

  );
}

export default Serhadcomponent