import {Navbar, Nav, Button, Container} from 'react-bootstrap';
import {GiMedicines} from 'react-icons/gi';
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Link to='/' className="mx-auto">
                <Navbar.Brand>
                    <GiMedicines className="mb-2" style={{color: '#5cb85c'}}/>
                    Pharma<span style={{color:'#5cb85c', fontWeight: 600}}>Tracker</span>
                </Navbar.Brand>
            </Link>
            <Nav className="ml-auto mx-auto">
                <Nav.Item  className="mr-4">
                    <Button variant="outline-success">
                        AdminSignup
                    </Button>
                </Nav.Item>
                <Nav.Item style = {{color: 'white'}}>
                    <Button variant="success">
                        AdminLogin
                    </Button>
                </Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default Header;