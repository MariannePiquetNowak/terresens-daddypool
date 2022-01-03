import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../assets/scss/containers/terresens.scss';

const Terresens = () => {
    return (
        <Container className="Terresens mb-5">
            <h3 className="text-center mt-3 mb-5">Terrésens</h3>
            <Row className="d-flex justify-content-center">
                <Col xs={9} sm={3}>
                    <h5>10 quick Tips about Blogging</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.</p>
                </Col>
                <Col xs={9} sm={3}>
                    <h5>10 quick Tips about Blogging</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.</p>
                </Col>
                <Col xs={9} sm={3}>
                    <h5>10 quick Tips about Blogging</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Terresens