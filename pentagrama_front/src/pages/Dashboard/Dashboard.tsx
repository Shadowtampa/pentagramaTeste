import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import "./styles.css"

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Form from 'react-bootstrap/Form';
import { RootState } from '../../services/redux/store';

import { useSelector, useDispatch } from 'react-redux'

export const Dashboard = () => {

  const [cities, setCities] = useState(useSelector((state: RootState) => state.city.cities));
  const [neighbourhoods, setNeighbourhoods] = useState(useSelector((state: RootState) => state.neighbourhood.neighbourhoods));

  const [presentationCities, setPresentationCities] = useState(cities)
  const [presentationNeighbourhoods, setPresentationNeighbourhoods] = useState(neighbourhoods)

  return (
    <div className='main-wrapper'>
      <div className='dash-table'>
        <Tabs
          defaultActiveKey="city"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="city" title="City">

            <div className='filter-wrapper'>
              <div className='filter'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nome da Cidade</Form.Label>
                  <Form.Control type="email" placeholder="Qual cidade?" onChange={(event) => { setPresentationCities(cities.filter(city => city.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))) }} />
                </Form.Group>
              </div>
              <div className='filter'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Estado</Form.Label>
                  <Form.Control type="email" placeholder="Qual Estado?" onChange={(event) => { setPresentationCities(cities.filter(city => city.state.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))) }} />
                </Form.Group>
              </div>
              <div className='filter'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Data da Fundação</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
              </div>


            </div>


            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Estado</th>
                  <th>Data Fundação</th>
                </tr>
              </thead>
              <tbody>

                {presentationCities !== undefined && presentationCities.map(city =>
                  <tr>
                    <td>{city.id}</td>
                    <td>{city.name}</td>
                    <td>{city.state}</td>
                    <td>{city.foundation.toString()}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Tab>
          <Tab eventKey="neighbourhood" title="Neighbourhood">

            <div className='filter-wrapper'>
              <div className='filter'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nome do Bairro</Form.Label>
                  <Form.Control type="text" placeholder="Qual bairro?" onChange={(event) => {
                    setPresentationNeighbourhoods(neighbourhoods.filter(
                      neighbourhood => neighbourhood.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())))
                  }} />
                </Form.Group>
              </div>
              <div className='filter'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Nome da cidade</Form.Label>
                  <Form.Control type="text" placeholder="Qual bairro?" onChange={(event) => {
                    setPresentationNeighbourhoods(
                      neighbourhoods.filter(
                        neighbourhood => neighbourhood.city_id ===
                          cities.filter(city => city.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()))[0].id
                      )
                    )
                  }} />
                </Form.Group>
              </div>

            </div>


            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nome</th>
                  <th>Cidade</th>
                </tr>
              </thead>
              <tbody>

                {presentationNeighbourhoods.map(neighbourhood =>
                  <tr>
                    <td>{neighbourhood.id}</td>
                    <td>{neighbourhood.name}</td>
                    <td>{cities.filter(city => city.id === neighbourhood.city_id)[0].name}</td>
                  </tr>
                )}
              </tbody>
            </Table>
          </Tab>
        </Tabs>
      </div>
    </div>
  )
}
