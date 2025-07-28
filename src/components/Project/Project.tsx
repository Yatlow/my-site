import { useState } from 'react'
import './Project.css'

interface ProjectProps {
    link: string,
    imgSrc: string[], //max 2 images 180mm*180mm
    caption: string[], // max 3 captions
    credentials?: string[] //user,pass
}

export default function Project({ link, imgSrc, caption, credentials }: ProjectProps) {
    const [imgIndex, setImgIndex] = useState(0);
    const [showCred, setShowCred] =useState(false)
    function handleEnter() {
        if (imgSrc.length > 1) {
            setImgIndex(1);
        }
    }

    function handleLeave() {
        setImgIndex(0);
    }


    // const element0 = <img src={`assets/images/${props.imgSrc[0]}`} />
    // const element1 = <img src={`assets/images/${props.imgSrc[1]}`} />
    // const [img, setImg] = useState(element0)
    // function handleEnter() {
    //     if (props.imgSrc.length > 1) {
    //         setImg(element1)
    //     }
    // }
    // function handleLeave() {
    //     setImg(element0)
    // }

    return (
        <div className="project">
            <a href={link} target="_blank" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <img
                    src={`assets/images/${imgSrc[imgIndex]}`}
                    alt={caption[0] || "Project image"}
                    loading="lazy" // Helps with performance
                />
                {/* {img} */}
                <div className="ProjDIV">
                    {caption.map(cap => (
                         <div className="innerDiv" key={cap}>{cap}</div>
                    ))}
                    {credentials && <a className='showCred' onMouseEnter={()=>setShowCred(true)}>credentials</a>}
                </div>
            </a>
                {credentials && showCred && 
                <div className='credsBox'>
                    <p className='closeCredsBox' onClick={()=>setShowCred(false)}>❌</p>
                    <p><strong>User: </strong>{credentials[0]}</p>
                    <p><strong>password: </strong>{credentials[1]}</p>
                    </div>}
        </div>
    )
}