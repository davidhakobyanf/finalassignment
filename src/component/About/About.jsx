import React from 'react';
import css from './About.module.css'
import {Col, Container, Row} from "react-bootstrap";
import img5 from "../../images/music-701238_1920.jpg";
const About = () => {
    return (
        <div className={css.servicesSection}>
            <Container className='py-5'>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={img5} alt="Solar Panels" className="img-fluid"/>
                    </Col>
                    <Col md={6}>
                        <div className={`${css.aboutText} text-white`}>
                            <h2 className="text-primary">About Us</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec elit ut mi eleifend
                                hendrerit in a urna. Aliquam vel risus urna. Pellentesque pharetra risus quis augue
                                ultricies, at lacinia metus imperdiet.</p>
                            <p>Morbi dictum purus quam, vitae consectetur ipsum pulvinar sit amet. In maximus velit vel
                                turpis tristique, eget convallis elit finibus. Aenean varius magna sit amet nulla
                                venenatis, vel dignissim leo vestibulum.</p>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>

    );
};

export default About;