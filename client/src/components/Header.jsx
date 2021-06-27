import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import {GiMedicines} from 'react-icons/gi';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <Navbar style={{height: 50, background: 'black', marginTop: 15}} sticky="top">
            <Link to='/' className="mx-auto">
                <Navbar.Brand>
                    <GiMedicines className="mb-2" style={{color: '#5cb85c'}}/>
                    <span style={{color:'#ffffff', fontWeight: 600}}>Pharma</span>
                    <span style={{color:'#5cb85c', fontWeight: 600}}>Tracker</span>
                    </Navbar.Brand>
            </Link>
            <Nav className="ml-auto mx-auto">
                <Link to='/Signup'>
                    <Nav.Item  className="mr-4">
                        <Button variant="outline-success">
                            AdminSignup
                        </Button>
                    </Nav.Item>
                </Link>
                <Link to='/Login'>
                    <Nav.Item style = {{color: 'white'}}>
                        <Button variant="success">
                            AdminLogin
                        </Button>
                    </Nav.Item>
                </Link>
            </Nav>
        </Navbar>
    )
}

export default Header;