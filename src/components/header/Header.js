import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';



const Header = () => {

   


    return (
        <div>


            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Burj Khalifa</Navbar.Brand>
                    <Nav className="me-auto">
                    <Link to="/" className='linkClass'>Home</Link>
                    <Link to="/products" className='linkClass'>Products</Link>
                        
                    </Nav>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;