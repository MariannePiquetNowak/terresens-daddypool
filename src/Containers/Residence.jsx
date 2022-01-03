import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ResidenceCol from "../Components/ResidenceCol";
import bg from "../assets/img/TERRASSE-1500x1000.jpg";

import '../assets/scss/containers/residence.scss';

const Residence = (props) => {
    return(
        <div className="Residence">
            <h3 className="text-center">Des emplacements prenium & une ambiance détente dans les plus belles stations de ski</h3>
            <Container>
                <Row>
                    <ResidenceCol 
                        class="residence-col"
                        category="Mégève (74)"
                        title="L'Altima"
                        display="bg border-one"
                        src={bg}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ResidenceCol>
                    <ResidenceCol 
                        class="residence-col reverse"
                        category="Combloux (74)"
                        title="Les Roches Blanches"
                        display="bg border-two"
                        src={bg}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ResidenceCol>
                    <ResidenceCol 
                        class="residence-col"
                        category="Montalbert(74)"
                        title="Le Snoroc"
                        display="bg border-one"
                        src={bg}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ResidenceCol>
                    <ResidenceCol 
                        class="residence-col reverse"
                        category="Serre Chevalier (05)"
                        title="Le Cristal Lodge"
                        display="bg border-two"
                        src={bg}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ResidenceCol>
                    <ResidenceCol 
                        class="residence-col"
                        category="La toussuire (74)"
                        title="Le Caprice Blanc"
                        display="bg border-one"
                        src={bg}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at nisl sit amet diam pharetra pellentesque nec a sapien. Vestibulum sem odio, pulvinar ac diam sit amet, porta varius lectus. Vivamus eget imperdiet nibh.
                    </ResidenceCol>
                </Row>
            </Container>
        </div>
    )
}

export default Residence;