import React from 'react'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import "./styles.css"

import { useNavigate } from "react-router-dom";


import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../services/redux/store';
import { toggleLoggedIn } from '../../slices/authSlice';

export const Landing = () => {

  const navigate = useNavigate();

  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  const handleLogin = () => {
    navigate("/dashboard");
    dispatch(toggleLoggedIn())
  }

  return (
    <div className="main-wrapper">
      <div className='login-form'>
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick ={() => handleLogin()}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}
