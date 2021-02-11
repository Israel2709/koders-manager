import React, { Component } from 'react'

import {
    Form,
    Label,
    Input,
    Button,
    FormGroup,
} from 'reactstrap'

class KodersForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newKoder: {}
        }

        this.changeHandler = this.changeHandler.bind( this )
    }

    changeHandler( event ){
        let property = event.target.name
        let value = event.target.value
        let newKoder = this.state.newKoder
        newKoder[property] = value
        this.setState( { newKoder })
      }

    render() {
        return (
            <Form className="border border-secondary shadow p-3 rounded bg-dark text-white mb-3">
                <FormGroup>
                    <Label>Nombre Completo</Label>
                    <Input placeholder="Escribe el nombre del koder" name="fullName" onChange={this.changeHandler} />
                </FormGroup>
                <FormGroup>
                    <Label>Generación</Label>
                    <Input placeholder="A qué generación pertenece?" name="generation" onChange={this.changeHandler} />
                </FormGroup>
                <FormGroup>
                    <Label>Bootcamp</Label>
                    <Input placeholder="En qué bootcamp?" name="bootcamp" onChange={this.changeHandler} />
                </FormGroup>
                <Button color="success" onClick={ 
                    () => {
                        this.props.saveKoderHandler( this.state.newKoder )
                    }
                }>Guardar Koder</Button>
            </Form>
        )
    }
}

export default KodersForm 