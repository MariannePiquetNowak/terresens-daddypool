import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../assets/scss/containers/terresens.scss';

const Terresens = () => {
    return (
        <section className="Terresens mb-5">
            <h3 className="text-center mt-3 mb-5">Terrésens</h3>
            <Container>
                <Row className="d-flex justify-content-center">
                    <Col xs={9} sm={9} md={9} lg={3}>
                        <h4>10 quick Tips about Blogging</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.</p>
                    </Col>
                    <Col xs={9} sm={9} md={9} lg={3}>
                        <h4>10 quick Tips about Blogging</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.</p>
                    </Col>
                    <Col xs={9} sm={9} md={9} lg={3}>
                        <h4>10 quick Tips about Blogging</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Terresens