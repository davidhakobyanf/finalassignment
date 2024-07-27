import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './Footer.module.css';

const Footer = () => {
    return (
        <div className={css.footer}>
            <Container>
                <Row>
                    <Col md={3} className={css.section}>
                        <h5 className={css.sectionTitle}>Payment Methods</h5>
                        <p>We Accept</p>
                        <div className={css.icons}>
                            <i className="fab fa-cc-visa"></i>
                            <i className="fab fa-cc-mastercard"></i>
                            <i className="fab fa-cc-paypal"></i>
                        </div>
                    </Col>
                    <Col md={3} className={css.section}>
                        <h5 className={css.sectionTitle}>Locations</h5>
                        <ul className={css.list}>
                            <li>Dubai</li>
                            <li>Sharjah</li>
                            <li>Hattah</li>
                            <li>Ras-Al-Khaima</li>
                            <li>Ajman</li>
                            <li>Abu Dhabi</li>
                        </ul>
                    </Col>
                    <Col md={3} className={css.section}>
                        <h5 className={css.sectionTitle}>Our Partners</h5>
                        <ul className={css.list}>
                            <li>Desert Cargo Couriers</li>
                            <li>AL-FADRAN EXCHANGE</li>
                            <li>Fahad Travel Agency</li>
                            <li>Dubai Travel Consultants</li>
                        </ul>
                    </Col>
                    <Col md={3} className={css.section}>
                        <h5 className={css.sectionTitle}>Contact Us</h5>
                        <p>lorem123@gmail.com</p>
                        <p>+971 0123456890</p>
                        <p>Follow us on</p>
                        <div className={css.socialIcons}>
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-pinterest"></i>
                            <i className="fab fa-instagram"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;
