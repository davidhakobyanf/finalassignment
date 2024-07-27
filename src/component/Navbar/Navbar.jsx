import React, { useState, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import styles from './Navbar.module.css'; // Ensure this CSS file is correctly imported
import logo from '../../images/lights-2203654_1920.jpg';

const NavigationBar = ({ homeRef, servicesRef, footerRef, aboutRef }) => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScrollDirection = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < lastScrollY || currentScrollY < 50) {
                setShowNavbar(true);
            } else {
                setShowNavbar(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScrollDirection);

        return () => {
            window.removeEventListener('scroll', handleScrollDirection);
        };
    }, [lastScrollY]);

    return (
        <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            className={`${styles.navbar} ${showNavbar ? styles.visible : styles.hidden}`}
        >
            <Navbar.Brand href="#home" className={styles.brand} onClick={() => handleScroll(homeRef)}>
                <i className="fa-solid fa-house"></i>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" style={{display:"flex", justifyContent:"flex-end", alignItems:"center", marginRight:"20px"}}>
                <Nav className="ml-auto">
                    <Nav.Link onClick={() => handleScroll(homeRef)} className={styles.navLink}>Home</Nav.Link>
                    <Nav.Link onClick={() => handleScroll(servicesRef)} className={styles.navLink}>Services</Nav.Link>
                    <Nav.Link onClick={() => handleScroll(aboutRef)} className={styles.navLink}>About</Nav.Link>
                    <Nav.Link onClick={() => handleScroll(footerRef)} className={styles.contact}>Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
