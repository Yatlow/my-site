import './Footer.css';

export default function Footer() {
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
    return (
        <footer>
            <div className="footerBox">
                <div className="footerImgBox">
                    <a href="#" target="_blank">
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