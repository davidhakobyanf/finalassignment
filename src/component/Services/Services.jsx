import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './Services.module.css';

const Services = () => {
    return (
        <div className={css.service}>
            <h1 className={css.title}>What We Offer!</h1>
            <Container>
                <Row>
                    <Col md={4}>
                        <Card className={css.card}>
                            <Card.Body>
                                <Card.Title className={css.cardTitle}>Home</Card.Title>
                                <Card.Subtitle className={css.price}>1500.$</Card.Subtitle>
                                <Card.Text>
                                    <ul className={css.features}>
                                        <li>Install Once</li>
                                        <li>10% Down Payment</li>
                                        <li>Complete Installation</li>
                                        <li>Hybrid</li>
                                        <li>100% Conversion</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className={css.card}>
                            <Card.Body>
                                <Card.Title className={css.cardTitle}>Farms</Card.Title>
                                <Card.Subtitle className={css.price}>4999.$</Card.Subtitle>
                                <Card.Text>
                                    <ul className={css.features}>
                                        <li>Install Once</li>
                                        <li>25% Down Payment</li>
                                        <li>Full Coverage</li>
                                        <li>Water System</li>
                                        <li>Artificial Sunlight</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className={css.card}>
                            <Card.Body>
                                <Card.Title className={css.cardTitle}>Businesses</Card.Title>
                                <Card.Subtitle className={css.price}>10,000.$</Card.Subtitle>
                                <Card.Text>
                                    <ul className={css.features}>
                                        <li>Install Once</li>
                                        <li>40% Down Payment</li>
                                        <li>Multiple Power Consoles</li>
                                        <li>Full Coverage</li>
                                        <li>100% Conversion</li>
                                    </ul>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;
