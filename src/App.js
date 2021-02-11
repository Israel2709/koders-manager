import React, { Component } from 'react'

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  CardDeck,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Button
} from 'reactstrap'

import './App.css';

import KodersList from './Components/KodersList/index'
import KodersForm from './Components/KodersForm/index'

class App extends Component {
  constructor() {
    super();
    this.state = {
      kodersList : [
        {
          fullName : "Israel Salinas Martínez",
          generation : "1a generación",
          bootcamp : "JavaScript"
        },{
          fullName : "Brenda González Quesada",
          generation : "4a generación",
          bootcamp : "JavaScript"
        }
      ],
      filteredKoders : [ ]
    }

    this.filterHandler = this.filterHandler.bind( this )
    this.saveKoderHandler = this.saveKoderHandler.bind( this )
  }

  filterHandler( event ){
    let filterValue = event.target.value.toLowerCase()
    let filterResult = this.state.kodersList.filter( koder => koder.fullName.toLowerCase().includes( filterValue ))
    console.log( filterValue )
    console.log( filterResult )
    this.setState( { filteredKoders : filterResult })
  }

  saveKoderHandler( newKoder ){
    this.setState({ kodersList : [...this.state.kodersList, newKoder]})
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row>
            <Col>
              <h1>Bienvenidos al sistema de gestión de Koders</h1>
              <div className="koders-list-wrapper mb-3">
                <KodersList
                  kodersList = { 
                    this.state.filteredKoders.length 
                    ? this.state.filteredKoders 
                    : this.state.kodersList 
                  }
                  filterHandler = { this.filterHandler }
                />
              </div>
            </Col>
            <Col>
              <KodersForm saveKoderHandler = { this.saveKoderHandler }/>
            </Col>
          </Row>

        </Container>
      </div>
    );
  }
}

export default App;
