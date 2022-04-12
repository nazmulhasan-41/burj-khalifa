import React from 'react';
import { Card, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';



const Header = () => {  


    return (
        <div>


            <Navbar bg="light" variant="light">
                
                <Container>
                    <Link className='title' to="/">Burj Khalifa</Link>
                    <Nav className="me-auto">
                    <Link to="/" className='linkClass'>Home</Link>
                    <Link to="/products" className='linkClass'>Products</Link>
                    <Link to="/login" className='linkClass'>Login</Link>
                    <Link to="/redux" className='linkClass'>Redux</Link>

                    </Nav>
                </Container>

               

            </Navbar>


        </div>
    );
};

export default Header;