import { useState } from 'react'
import './Project.css'

interface ProjectProps {
    link: string,
    imgSrc: string[], //max 2 images 180mm*180mm
    caption: string[], // max 3 captions
}

export default function Project(props: ProjectProps) {
    const [img, setImg] = useState(props.imgSrc[0])
    function handleEnter() {
        if (props.imgSrc.length > 1) {
            setImg(props.imgSrc[1])
        }
    }
    function handleLeave() {
        setImg(props.imgSrc[0])
    }

    return (
        <div className="project">
            <a href={props.link} target="blank" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <img src={`assets/images/${img}`}/>
                <div className="ProjDIV">
                    {props.caption.map(cap => (
                        <div className="innerDiv" key={cap}>{cap}</div>
                    ))}
                </div>
            </a>
        </div>
    )
}