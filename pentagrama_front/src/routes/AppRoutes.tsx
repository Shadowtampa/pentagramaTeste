import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { Landing } from '../pages/Landing/Landing';
import { City } from '../pages/City/City';
import { Neighbourhood } from '../pages/Neighbourhood/Neighbourhood';
import { Dashboard } from '../pages/Dashboard/Dashboard';
import { User } from '../pages/User/User';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { RootState } from '../services/redux/store';

import { useSelector, useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap';
import { toggleLoggedIn } from '../slices/authSlice';

// import { loadFromStorage } from '../features/authSlice';

export const AppRoutes = () => {

  const auth = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/dashboard">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {auth.auth ? <Button variant="link" onClick={() => {dispatch(toggleLoggedIn())}}>Logout</Button>: <Button variant="link" onClick={() => {dispatch(toggleLoggedIn())}} >Login</Button>} 
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Router>
        <Routes>
          <Route path="/" element={<Landing />} /> {/* tela de login */}
          <Route path="/city" element={auth.auth ? <City /> : <Landing />} /> {/* Tela de cadastro de cidade */}
          <Route path="/neighbourhood" element={auth.auth ? <Neighbourhood />  : <Landing />} /> {/* Tela de cadastro de bairro */}
          <Route path="/dashboard" element={auth.auth ? <Dashboard />  : <Landing />} /> {/* Relatório de cidades e bairro */}
          <Route path="/user" element={auth.auth ? <User />  : <Landing />} /> {/* Tela de cadastro de usuário. */}
        </Routes>
      </Router>

    </>

  )
}
