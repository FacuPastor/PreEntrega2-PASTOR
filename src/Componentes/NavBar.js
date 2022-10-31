import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import NavDropdown from 'react'
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <Navbar className='' bg="dark" expand="lg">
            <Container className='navContainer'>
            <div className="flex justify-between items-center marca">
                <span>
                    <Link to={`/`} >
                        <img className="h-5 inline mx-3 imgLogo logo" alt='logo' src='/img/logo.jpg'></img>Shoes Point 
                    </Link>
                </span>
            </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={`/`} className="links">Inicio</NavLink>
                        <NavLink to={`/marca/Adidas`} className="links">Adidas</NavLink>
                        <NavLink to={`/marca/New Balanace`} className="links">New Balanace</NavLink>
                        <NavLink to={`/marca/Nike`} className="links">Nike</NavLink>
                        <NavLink to={`/marca/Pumas`} className="links">Pumas</NavLink>
                        <NavLink to={`/marca/Vans`} className="links">Vans</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;


