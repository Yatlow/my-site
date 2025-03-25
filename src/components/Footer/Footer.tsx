import './Footer.css';

export default function Footer() {
    
    return (
        <footer>
            <div className="footerBox">
                <div className="footerImgBox">
                    <a href="https://www.linkedin.com/in/yisrael-atlow-68b59a358/" target="_blank">
                        <img src="assets/images/linkdinT.png" className="footerImgT" />
                        <img src="assets/images/linkdin.png" className="footerImg" /></a>
                </div>
                <div className="footerImgBox">
                    <a href="https://github.com/Yatlow" target="_blank">
                        <img src="assets/images/githubT.png" className="footerImgT" />
                        <img src="assets/images/github.png" className="footerImg" /></a>
                </div>
                <div className="footerImgBox">
                    <a href="https://www.instagram.com/yisraelatlow/" target="_blank">
                        <img src="assets/images/instagramT.png" className="footerImgT" />
                        <img src="assets/images/instagram.png" className="footerImg" /></a>
                </div>
                <div className="footerImgBox">
                    <a href="https://www.facebook.com/yatlow/" target="_blank">
                        <img src="assets/images/facbookT.png" className="footerImgT" />
                        <img src="assets/images/facbook.png" className="footerImg" /></a>
                </div>
            </div>
        </footer>
    )
}