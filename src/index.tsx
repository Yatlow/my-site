import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <div>
            <Header />
            <div className='mainBox'>
                <div id="home">
                    <Home />
                </div>
                <div id="about">
                    <About />
                </div>
                <div id="projects">
                    <Projects />
                </div>
                <div id="contact">
                    <Contact />
                </div>
            </div>
            <Footer/>
        </div>
    </StrictMode>,
)
function adjustFooterPosition() {
    const footer = document.querySelector('footer');
    const viewportHeight = window.innerHeight;
    const footerHeight = footer.offsetHeight;

    // If the height of the footer is more than 10% of the viewport height, adjust
    if (footerHeight > (viewportHeight * 0.1)) {
        footer.style.bottom = '0'; // Position it at the bottom of the screen
    } else {
        footer.style.bottom = '0'; // If everything else fails, reset to bottom
    }
}

window.addEventListener('resize', adjustFooterPosition);
window.addEventListener('load', adjustFooterPosition);
