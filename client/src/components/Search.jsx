import { Form, Container, Row, Col, Button } from 'react-bootstrap';


const form = {
    marginTop: 100    
}

const Search = () => {
    return (
        <Container>
            <div style={{ display: 'block', 
                width: 700, 
                padding: 30 }}>
            <h4>Search Medicines</h4>
            <Form>
            <Form.Group>
                <Form.Label>Enter Medicine Name</Form.Label>
                <Form.Control type="text" 
                                placeholder="Enter medicine name" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select District Name</Form.Label>
                    <Form.Control as="select">
                    <option>Rajkot</option>
                    <option>Ahmedabad</option>
                    <option>Surat</option>
                    <option>Junagadh</option>
                    <option>Porbandar</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                Submit
                </Button>
            </Form>
            </div>
        </Container>
    )
}

export default Search;