import { Form, Col, Button } from 'react-bootstrap';


const Update = () => {
    return (
        <div style = {{display: 'flex', alignItems: 'center'}}>
            <div style={{ display: 'block', 
            width: '30%',
            margin: '100px auto',
            borderRadius: '5px',
            background: 'rgba(255,255,255, 0.15)',
            padding: 30,
            }}>
                <h4 style={{color: '#ffffff', display:'flex', justifyContent: "center", alignItems: "center", marginBottom: 15}}>
                    Update
                </h4>
                <Form>
                    <Form.Group as={Col}>
                        <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                            <span>Medicine Name</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Medicine Name"/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                            <span>Quantity</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Quantity"/>
                    </Form.Group>
                    <Button size="lg" variant="success" type="submit" style={{marginLeft: '40%', marginTop: 20}}>
                        Update
                    </Button>
                </Form>
            </div>
            <div style={{ display: 'block', 
            width: '30%',
            height: '30%',
            margin: '100px auto',
            borderRadius: '5px',
            background: 'rgba(255,255,255, 0.15)',
            padding: 30,
            }}>
                <h4 style={{color: '#ffffff', display:'flex', justifyContent: "center", alignItems: "center"}}>
                    Delete
                </h4>
                <Form>
                    <Form.Group as={Col}>
                        <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                            <span>Medicine Name</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Medicine Name"/>
                    </Form.Group>
                    <Button size="lg" variant="success" type="submit" style={{marginLeft: '40%', marginTop: 20}}>
                        Delete
                    </Button>
                </Form>
            </div>
        </div>
    )
}


export default Update;