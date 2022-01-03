import React from 'react';
import { Container, Row, Image } from 'react-bootstrap';
import ConceptCol from '../Components/ConceptCol';
import test from "../assets/img/TERRASSE-1500x1000.jpg"
import daddyppol from "../assets/img/logo-daddy-e1630317717270.png";

const Concept = (props) => {

    const colMiddle = "concept-col middle d-flex flex-column-reverse";
    const colFirst = "concept-col first d-flex flex-column";
    const colLast = "concept-col last d-flex flex-column";


    return (
        <div className="Concept">
            <h3 className="text-center">Des emplacements prenium & une ambiance détente dans les plus belles stations de ski</h3>
            <Container>
                <Row>
                    <ConceptCol 
                        category="confort" 
                        title="Qualité" 
                        src={test}
                        class={colFirst}
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ConceptCol>
                    <ConceptCol 
                        category="Convivialité" 
                        title="Espaces communs" 
                        src={test}
                        class={colMiddle}
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ConceptCol>
                    <ConceptCol 
                        category="douceur de vivre" 
                        title="Cocon" 
                        src={test}
                        class={colLast}
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ConceptCol>
                </Row>
                <Row>
                    <ConceptCol 
                        category="Sérénité" 
                        title="Services" 
                        src={null}
                        class={colFirst}
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ConceptCol>
                    <div 
                        className="concept-daddy"
                        style={{
                            backgroundImage: `url(${daddyppol})`,
                            backgroundRepeat: `no-repeat`,
                            backgroundPosition: `center`,
                            backgroundSize: `90%`,
                            padding: `2em`,

                        }}
                    ></div>
                    <ConceptCol 
                        category="prenium" 
                        title="Emplacements" 
                        src={null}
                        class={colLast}
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ConceptCol>
                </Row>
            </Container>
        </div>
    )
}

export default Concept;