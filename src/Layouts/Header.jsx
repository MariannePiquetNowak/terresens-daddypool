import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import daddypool from "../assets/img/logo-daddy-e1630317717270.png";
import "../assets/scss/layouts/header.scss";

const Header = () => {
    return (
        <header className="Header">
            <Navbar bg="light" expand="lg">
                <Container className="header-nav">
                    <Navbar.Brand href="#home">
                        <img
                            src={daddypool}
                            width="30"
                            height="30"
                            className="d-inline-block align-top logo"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#concept">Le concept</Nav.Link>
                            <Nav.Link href="#residence">Les résidences</Nav.Link>
                            <Nav.Link href="#group">Le Groupe</Nav.Link>
                            <Nav.Link href="#contact">contact</Nav.Link>
                            <Nav.Link href="#pricing">Espace Partenaire</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </header>
    )
}

export default Header;