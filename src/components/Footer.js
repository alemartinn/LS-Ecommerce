import { useSelector } from "react-redux";
import "../styles/Footer.css"
import {Link as LinkRouter} from "react-router-dom"
import ScrollToTop from "./ScrollToTop";
function Footer() {

    const { thirdColor, fontColor } = useSelector(state => state.color)

    return (
        <footer className="footer-container"
            style={{ backgroundColor: thirdColor }}>
            <div className="footer-content">
                <div>
                    <p
                        className="footer-text"
                        style={{ color: fontColor }}
                        >Our Social Media</p>
                <div className="footer-col">
                    <a href="#"><img className="footer-media-icon" src="https://cdn-icons-png.flaticon.com/512/1077/1077042.png" /></a>
                    <a href="#"><img className="footer-media-icon" src="https://cdn-icons-png.flaticon.com/512/739/739247.png" /></a>
                    <a href="#"><img className="footer-media-icon" src="https://cdn-icons-png.flaticon.com/512/739/739237.png" /></a>
                    <a href="#"><img className="footer-media-icon" src="https://cdn-icons-png.flaticon.com/512/1077/1077048.png" /></a>
                    <a href="#"><img className="footer-media-icon" src="https://cdn-icons-png.flaticon.com/512/2190/2190466.png" /></a>
                </div>
                    <p style={{ color: fontColor }} className="footer-rights-p">©2022 LS Food Co</p>
                        </div>
                <div className="footer-col2">
                    <img src="images/MinilogoLS.png" alt="minilogo" className="footer-logo" />
                    <p style={{ color: fontColor }}>
                        <LinkRouter
                            to={"/terms"}
                            className="footer-link"
                            style={{ color: fontColor }}
                        >Terms </LinkRouter>
                        /
                        <LinkRouter
                            to={"/about"}
                            className="footer-link"
                            style={{ color: fontColor }}
                        > About Us</LinkRouter>
                    </p>
                </div>
                <div className="footer-col3">
                    <p style={{ color: fontColor }}>Footer nav</p>
                    <ScrollToTop />
                </div>
            </div>
        </footer>
    )
}

export default Footer