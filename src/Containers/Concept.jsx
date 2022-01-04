import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ConceptCol from '../Components/ConceptCol';
import test from "../assets/img/TERRASSE-1500x1000.jpg"
import daddyppol from "../assets/img/logo-daddy-e1630317717270.png";
import '../assets/scss/containers/concept.scss';

const Concept = (props) => {

    const colMiddle = "concept-col middle";
    const colFirst = "concept-col first";
    const colLast = "concept-col last";


    return (
        <section className="Concept">
            <h3 className="text-center">Des emplacements prenium & une ambiance détente dans les plus belles stations de ski</h3>
            <Container>
                <Row>
                    <ConceptCol 
                        category="confort" 
                        title="Qualité" 
                        src={test}
                        class={colFirst}
                        display="concept-col-img"
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ConceptCol>
                    <ConceptCol 
                        category="Convivialité" 
                        title="Espaces communs" 
                        src={test}
                        class={colMiddle}
                        display="concept-col-img"
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ConceptCol>
                    <ConceptCol 
                        category="douceur de vivre" 
                        title="Cocon" 
                        src={test}
                        class={colLast}
                        display="concept-col-img"
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
                        display="concept-col-img-none"
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
                        display="concept-col-img-none"
                        >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ConceptCol>
                </Row>
            </Container>
        </section>
    )
}

export default Concept;