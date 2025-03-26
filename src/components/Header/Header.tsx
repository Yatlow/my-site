import { useState, useEffect, RefObject } from 'react';
import './Header.css';


export default function Header(props: { Home: RefObject<HTMLElement|null>, About: RefObject<HTMLElement|null>, Projects: RefObject<HTMLElement|null>, Contact: RefObject<HTMLElement|null> }) {
    const [navOpen, setNavOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 600) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };


        handleResize();

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
        setNavOpen(prevState => !prevState);
    };
    const closeMenuOnLogoClick = () => {
        if (navOpen) {
            setNavOpen(false);
        }
    };

    function scrollToElement(element: RefObject<HTMLElement|null>) {
        element?.current?.
            scrollIntoView({
                behavior: "smooth",  // Smooth scroll effect
                block: "start",      // Align the target at the top of the viewport
            });
    };

    return (
        <div className="header">
            <a href="#" className="LogoBox" onClick={closeMenuOnLogoClick} >
                <img src='assets/images/Yatlow Logo.png' className="Logo" alt="Yisrael Atlow" />
                <div>Yisrael Atlow</div>
            </a>
            <div className="hamburgerBox">
                <img
                    src='assets/images/Hamburger.png'
                    onClick={toggleMenu}
                    alt="Menu Toggle"
                />
            </div>
            <div className={`navItemsBox ${isMobile && !navOpen ? 'hideMobile' : ''}`} onClick={toggleMenu} >
                <a className="navItem" onClick={() => scrollToElement(props.Home)}>Home</a>
                <a className="navItem"  onClick={() => scrollToElement(props.About)}>About</a>
                <a className="navItem"  onClick={() => scrollToElement(props.Projects)}>Projects</a>
                <a className="navItem"  onClick={() => scrollToElement(props.Contact)}>Contact</a>
            </div>
        </div>
    );
}
