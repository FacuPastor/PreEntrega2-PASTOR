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
                <span className="text-xl font-mono mx-4 p-5 font-['monaco'] hover:text-cyan-800 duration-500 cursor-pointer">
                    <Link to={`/`} >
                        <img className="h-5 inline mx-3 imgLogo logo" alt='logo' src='/img/logo.jpg'></img>Shoes Point 
                    </Link>
                </span>
            </div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to={`/`} className="links">Inicio</Link>
                        <Link to={`/marca/Adidas`} className="links">Adidas</Link>
                        <Link to={`/marca/New Balanace`} className="links">New Balanace</Link>
                        <Link to={`/marca/Nike`} className="links">Nike</Link>
                        <Link to={`/marca/Pumas`} className="links">Pumas</Link>
                        <Link to={`/marca/Vans`} className="links">Vans</Link>
                    </Nav>
                </Navbar.Collapse>
                <CartWidget/>
            </Container>
        </Navbar>
    );
}

export default NavBar;


