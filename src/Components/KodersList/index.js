import {
    CardDeck,
    Card,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'

import FilterInput from '../FilterInput/index'

function KodersList( props ) {
    return (
        <>
            <FilterInput filterHandler = { props.filterHandler } /> 
            <CardDeck>
                {
                    props.kodersList.map( koder => {
                        let { fullName, generation, bootcamp } = koder
                        return (
                            <Card>
                                <CardBody>
                                    <CardTitle>{fullName}</CardTitle>
                                    <CardText>{generation} {bootcamp}</CardText>
                                </CardBody>
                            </Card>
                        )
                    }) 
                }
            </CardDeck>
        </>
    )
}  

export default KodersList