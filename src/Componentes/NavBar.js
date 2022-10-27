import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import NavDropdown from 'react'

function NavBar() {
    return (
        <Navbar className='' bg="dark" expand="lg">
            <Container className='navContainer'>
                <div className='marca'>            
                    <img className="h-5 inline mx-3 imgLogo" alt='logo' src='/img/logo.jpg'></img>
                    <Navbar.Brand className='logo' href="#home">Shoes Point</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link to={`/`}>Inicio</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item to={`/marca/Adidas`}>Adidas</NavDropdown.Item>
                            <NavDropdown.Item to={`/marca/New Balanace`}>New Balanace</NavDropdown.Item>
                            <NavDropdown.Item to={`/marca/Nike`}>Nike</NavDropdown.Item>
                            <NavDropdown.Item to={`/marca/Pumas`}>Pumas</NavDropdown.Item>
                            <NavDropdown.Item to={`/marca/Vans`}>Vans</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;