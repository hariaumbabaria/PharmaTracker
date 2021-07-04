import { Form, Col, Row, Button, Card, CardGroup } from 'react-bootstrap';
import { useContext } from 'react';
import { useState } from 'react';
import { medicinefinder, userfind } from '../service/service';
import axios from 'axios';

const url = 'http://localhost:5000/api';

var vis=0;

const Output = (props) => {
    
    const medicinedata = props.medicine;
    console.log(medicinedata);

    const [ userdata,setUserdata ] = useState([]);

    const userFinder = (medicine) => {
        try {
            console.log(medicine.username)
            axios.get(`${url}/user/search`,{'params':{username: medicine.username}})
            .then ((res) => {
                console.log(res.data);
                setUserdata([...userdata,res.data]);
            })
        }catch(err) {
            console.log('Error while finding User',err);
        }
    }

    const userdone = () => {
        if(vis>0){
            return;
        }
        vis=1;
        for(var i = 0; i < medicinedata.length; i++)
        {
            userFinder(medicinedata[i]);
        }
    }

    userdone();
    console.log(userdata);
    return (
        <Row xs={1} md={2} className="g-4" style={{margin: '3% 3%'}}>
            {
                medicinedata.map(medicine => (
                    <Col className = "mb-3">
                        <Card border="success" style = {{backgroundColor: 'rgba(255,255,255, 0.15)', color: '#ffffff'}}>
                            <Card.Body>
                            <Card.Title>{medicine.name}</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))
            }
        </Row>   
    )
}


export default Output;
// imageSizes.map((a) => {
//     const capitalizedName = a.name[0].toUpperCase() + a.name.slice(1);
//     return `${captalizedName} image - ${a.width} x ${a.height}`;
//   });