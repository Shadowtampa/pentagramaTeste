import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./styles.css"

import { useNavigate } from "react-router-dom";


import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../services/redux/store';
import { toggleLoggedIn } from '../../slices/authSlice';
import { Col, Container, Row } from 'react-bootstrap';

import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const Landing = () => {

  const navigate = useNavigate();

  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const handleLogin = () => {
    navigate("/dashboard");
    dispatch(toggleLoggedIn())
  }

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="main-wrapper" style={{marginTop: "10rem"}}>





        <Container style={{height: "100%"}}>
          <Row > 
            <Col xs={6} >
              <div style={{display:'flex', flexDirection: "column", alignItems: "center", justifyContent: "center"}}>

              
              <h2 className="greetings">Bem vindo de volta!</h2>
              <Button onClick={openModal}>Login</Button>
              </div>
            </Col>
            <Col xs={6}>
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>



                <Button variant="primary" type="submit" onClick={() => handleLogin()}>
                  Register
                </Button>
              </Form></Col>
          </Row>
        </Container>

        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
            <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      </Modal>
      </div>
  )
}
