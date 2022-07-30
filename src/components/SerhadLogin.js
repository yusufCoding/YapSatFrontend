import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import backgroundCity from "./backgroundCity.jpg"

const SerhadLogin = () => {

  return (

    <div className='w-full h-screen bg-zinc-900/90'>
    <img className='absolute w-full h-full  mix-blend-overlay' src={backgroundCity} alt="/" />
    <br></br>
    <br></br>
      <div style={{marginRight:"300px",marginLeft:"300px"}}>
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