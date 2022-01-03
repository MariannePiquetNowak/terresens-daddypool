import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../assets/scss/containers/concept.scss';

const ConceptCol = (props) => {
    return (

        <Col className={props.class} xs={12} sm={3}>
            <div className="concept-col__text">
                <span>{props.category}</span>
                <h4>{props.title}</h4>
                <p>{props.children}</p>
            </div>
            <div 
                className="concept-col-img"
                style={{
                    backgroundImage: `url(${props.src})`,
                }}
            ></div>
        </Col>

    )
}

export default ConceptCol;