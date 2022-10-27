import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';


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
                        <Nav.Link className='links' href="./Sitios/Inicio">Inicio</Nav.Link>
                        <Nav.Link className='links' href="#link">Carrito</Nav.Link>
                        <Nav.Link className='links' href="#link">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;