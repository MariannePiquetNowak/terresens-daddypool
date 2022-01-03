import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import ButtonLink from "../Components/ButtonLink";
import daddypool from "../assets/img/logo-daddy-e1630317717270.png";
import "../assets/scss/layouts/header.scss";
import background from "../assets/img/TERRASSE-1500x1000.jpg";

const Header = () => {
    return (
        <header className="Header d-flex flex-column align-items-center">
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
            <div className="bg d-flex flex-column align-items-center justify-content-center" 
                style={{ 
                    backgroundImage: `url(${background}) no-repeat center`, 
                    padding: `5em 3em`,
                    width: `100%`,
                    height: `500px`,
                    color: `#ffffff`,
                    borderTopLeftRadius: `25px`,
                    borderBottomRightRadius: `25px`,
                }}>
                <h1 className="text-center">Un concept unique</h1>
                <p>Confort, convivialité, sérénité : en mode Daddy Pool pour un séjour inoubliable</p>
                <ButtonLink href="#residence">Nos Résidence DaddyPool</ButtonLink>
            </div>

        </header>
    )
}

export default Header;