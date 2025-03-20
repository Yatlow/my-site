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
