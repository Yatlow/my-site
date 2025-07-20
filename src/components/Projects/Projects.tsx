import Project from "../Project/Project";
import './Projects.css'

//adding project info:
//imgSrc: max 2 images 180mm*180mm
//caption:max 3 caption texts
//edit #projects padding @ main.css for adding projects


export default function Projects() {
    return (
        <div className="projectsBox">

            <div className="projects">
                <Project link="https://github.com/Yatlow/Keg-washer"
                    imgSrc={["kegWasherT.jpg", "kegWasher.png"]}
                    caption={["Automatic keg Washer", "Rpi based- machine", "Python & Js"]} />
                <Project link="https://yatlow.github.io/vacations/"
                    imgSrc={["vacations.png",]} caption={["Vacations App", "React - node.js - Sql"]} />
                <Project link="https://yatlow.github.io/Crypto/"
                    imgSrc={["Crypto.png",]} caption={["Crypto Api", "Js - Axios & Css"]} />
                <Project link="https://yatlow.github.io/Role-the-Dice/"
                    imgSrc={["Roll The Dice.png",]} caption={["Roll the Dice", "Js & Css"]} />
                <Project link="https://yatlow.github.io/paint/"
                    imgSrc={["paint.jpg",]} caption={["Paint", "Js & Css"]} />
                <Project link="https://yatlow.github.io/to-do/"
                    imgSrc={["to-do.jpg",]} caption={["To-Do", "Js & Css"]} />
                <Project link="https://yatlow.github.io/dog-API/"
                    imgSrc={["dogAPI.png",]} caption={["Dog Api", "Js - Axios"]} />
                <Project link="https://yatlow.github.io/Countries/"
                    imgSrc={["Country.png",]} caption={["Countries Api", "Js - Axios"]} />
            </div>
        </div>
    )
}