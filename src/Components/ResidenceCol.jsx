import React from 'react';
import { Col, Image } from 'react-bootstrap';
import ButtonLink from '../Components/ButtonLink';

const ResidenceCol = (props) => {
    return(
        <Col className={props.class} md={12} lg={12} xl={12}>
            <div className="residence__text">
                <span>{props.category}</span>
                <h4>{props.title}</h4>
                <p>{props.children}</p>
                <ButtonLink>Télécharger la brochure</ButtonLink>
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

export default ResidenceCol;