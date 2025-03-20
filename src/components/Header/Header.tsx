import { useState, useEffect } from 'react';
import './Header.css';
// import myLogo from '../../../assets/images/Yatlow Logo.png';
// import hamburger from '../../../assets/images/Hamburger.png'
// import '../../../public/assets/images/Yatlow Logo.png'

export default function Header() {
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

    return (
        <div className="header">
            <a href="#" className="LogoBox" onClick={closeMenuOnLogoClick} >
                <img src='../../../public/assets/images/Yatlow Logo.png' className="Logo" alt="Yisrael Atlow" />
                <div>Yisrael Atlow</div>
            </a>
            <div className="hamburgerBox">
                <img 
                    src='../../../public/assets/images/Hamburger.png'
                    onClick={toggleMenu} 
                    alt="Menu Toggle"
                />
            </div>
            <div className={`navItemsBox ${isMobile && !navOpen ? 'hideMobile' : ''}`} onClick={toggleMenu} >
                <a className="navItem" href="#">Home</a>
                <a className="navItem" href="#about">About</a>
                <a className="navItem" href="#projects">Projects</a>
                <a className="navItem" href="#contact">Contact</a>
            </div>
        </div>
    );
}
