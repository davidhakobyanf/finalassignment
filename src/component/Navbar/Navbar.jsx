import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from './Navbar.module.css';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" className={styles.navbar}>
            <Navbar.Brand href="home" className={styles.brand}>MyWebsite</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="home" className={styles.navLink}>Home</Nav.Link>
                    <Nav.Link href="about" className={styles.navLink}>About</Nav.Link>
                    <Nav.Link href="services" className={styles.navLink}>Services</Nav.Link>
                    <Nav.Link href="contact" className={styles.navLink}>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
