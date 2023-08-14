import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-success">
            <Container>
                <Navbar.Brand className="text-light display-5" style={{ "fontWeight": "bold" }}><Link to="/" className="text-light" style={{ "textDecoration": "none" }} >Post Tracker</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        <Link to="/post/create" className='text-light mx-2' style={{ "textDecoration": "none" }}>Create Post  </Link>{" "}
                        <Link to="/user/create" className='text-light' style={{ "textDecoration": "none" }}>Create User</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;