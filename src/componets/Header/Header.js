import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle />

                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/registar">Registar</Nav.Link>

                            <Nav.Link as={Link} to="/login">Login</Nav.Link>


                            {/* {
                                user.email ? <Nav.Link ><button className="btn btn-light" variant="light" onClick={Logout}>LogOut</button></Nav.Link> :
                                    <Nav.Link as={Link} to="/login">Login</Nav.Link>

                            } */}
                            {/* <Nav.Link>{user.displayName}</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;