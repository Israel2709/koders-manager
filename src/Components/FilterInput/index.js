import {
    Form,
    FormGroup,
    Input,
    Label,
} from 'reactstrap'

function FilterInput( props ){
    return(
        <Form className="border border-secondary shadow p-3 rounded bg-dark text-white mb-3">
                <FormGroup>
                    <Label>Filtrar por nombre</Label>
                    <Input placeholder="Escribe el nombre del koder" onChange = { props.filterHandler }/>
                </FormGroup>
            </Form>
    )
}

export default FilterInput