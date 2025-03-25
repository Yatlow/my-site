import Header from '../components/Header/Header'
import Home from '../components/Home/Home'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'
import { useRef } from 'react'


export default function App() {

const HomeRef=useRef<HTMLDivElement>(null);
const AboutRef=useRef<HTMLDivElement>(null);
const ProjectsRef=useRef<HTMLDivElement>(null);
const ContactRef=useRef<HTMLDivElement>(null);

return(
<div>
        <Header About={AboutRef} Contact={ContactRef} Home={HomeRef} Projects={ProjectsRef}/>
        <div className='mainBox'>
            <div ref={HomeRef}>
                <Home />
            </div>
            <div ref={AboutRef}>
                <About />
            </div>
            <div ref={ProjectsRef}>
                <Projects />
            </div>
            <div ref={ContactRef}>
                <Contact />
            </div>
        </div>
        <Footer />
    </div>
)
}
