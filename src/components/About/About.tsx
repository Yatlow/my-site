import './About.css'

const resources = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Python",
    "Adobe illustrator",
    "office applications",
]

export default function About() {
    return (
        <div className='about'>
            <div className="aboutDivBox">
                <div className="aboutDiv">My journey began in 2015 when I started home-brewing beer. What started as a hobby quickly evolved into a profession. I immersed myself in the craft, earning several international certifications along the way by self learning, reading and experimenting. I discovered a passion for systematically approaching problems and solving them piece by piece.</div>
                <div className="aboutDiv">My coding journey began out of necessity. My employees were manually washing kegs, a time-consuming task. To improve efficiency, I purchased a Raspberry Pi and created an automatic keg washing machine. (check out in the projects section!).</div>
                <div className="aboutDiv">Developing the keg washer code taught me Python, which was invaluable later as I wanted to transition into a full-stack web developer role, leveraging my coding skills to further enhance my projects.</div>
                <div className='aboutDiv strong'>Resources:</div>
                <ul>
                    {resources.map(resource => (
                        <li key={resource}>{resource}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}