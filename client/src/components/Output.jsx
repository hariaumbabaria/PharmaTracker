import { Form, Col, Row, Button, Card, CardGroup } from 'react-bootstrap';
import { LoginContext } from '../controller/loginstate';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { useState } from 'react';
import { medicinefinder, userfind } from '../service/service';

const Output = (props) => {
    const medicinedata = medicinefinder(props.medicine);
    console.log(medicinedata);

    return (
        <Row xs={1} md={2} className="g-4" style={{margin: '3% 3%'}}>
            <Col className = "mb-3">
                <Card border="success" style = {{backgroundColor: 'rgba(255,255,255, 0.15)', color: '#ffffff'}}>
                    <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
            
    )
}


export default Output;