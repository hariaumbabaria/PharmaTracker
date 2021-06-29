import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import { FiLogIn } from 'react-icons/fi'
import {authenticateSignup} from '../service/service';
import {useState} from 'react';

const signupInitialValues = {
    fullname: '',
    username: '',
    password: '',
    phone: '',
    email: '',
    shopname: '',
    shopaddress: '',
    district: '',
    pincode: '',
    features: ''
};


const Signup = () => {

    const [signup, setSignup] = useState(signupInitialValues);

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
        console.log(signup);
    }

    return (
        <div style={{ display: 'block', 
            width: '70%',
            margin: '100px auto',
            borderRadius: '5px',
            background: 'rgba(255,255,255, 0.15)',
            padding: 30,
         }}>
            <h4 style={{color: '#ffffff', display:'flex', justifyContent: "center", alignItems: "center", marginBottom: 15}}>
                <FiLogIn style={{color: '#ffffff', fontSize: 30}} className="mr-2"/>
                SignUp
            </h4>
            <Form>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                            <span>Full Name</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Full Name"/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                            <span>User Name</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter User Name"/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                            <span>Password</span>
                        </Form.Label>
                        <Form.Control type="password" placeholder="Enter Password"/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                            <span>Phone Number</span>
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter Phone Number"/>
                    </Form.Group>
                </Row>
                <Row>
                <Form.Group as={Col}>
                    <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                        <span>Email</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Email Address"/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                        <span>Shop Name</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Shop Name"/>
                </Form.Group>
                </Row>
                <Form.Group>
                    <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                        <span>Shop Address</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Shop Address"/>
                </Form.Group>
                <Row>
                <Form.Group as={Col}>
                    <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                        <span>District</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter District"/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                        <span>Pin Code</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Pin Code"/>
                </Form.Group>
                </Row>
                <Form.Group>
                    <Form.Label style={{fontSize: 20, color: '#ffffff'}}>
                        <span>Features</span>
                    </Form.Label>
                    <Form.Control type="text" placeholder="Enter Features"/>
                </Form.Group>
                <Button size="lg" variant="success" style={{marginLeft: '45%', marginTop: 20}}>
                    SignUp
                </Button>
            </Form>
        </div>
    )
}

export default Signup;