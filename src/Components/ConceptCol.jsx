import React from 'react';
import { Col } from 'react-bootstrap';

const ConceptCol = (props) => {
    return (

        <Col className={props.class}>
            <div className="concept-col__text">
                <span>{props.category}</span>
                <h4>{props.title}</h4>
                <p>{props.children}</p>
            </div>
            <div 
                className={props.display}
                style={{
                    backgroundImage: `url(${props.src})`,
                }}
            ></div>
        </Col>

    )
}

export default ConceptCol;