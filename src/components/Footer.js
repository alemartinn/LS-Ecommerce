import { useSelector } from "react-redux";
import "../styles/Footer.css"
import {Link as LinkRouter} from "react-router-dom"
import ScrollToTop from "./ScrollToTop";
function Footer() {

    const { fourthColor, fontColor } = useSelector(state => state.color)

    return (
        <footer className="footer-container"
            style={{ backgroundColor: fourthColor }}>
            <div className="footer-content">
                <div className="footer-col">
                    <p
                        className="footer-text"
                        style={{ color: fontColor }}
                    >Social Media...</p>
                    <p style={{ color: fontColor }}>©2022 LS Food Co</p>
                </div>
                <div className="footer-col">
                    <p style={{ color: fontColor }}>LOGO</p>
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
                <div className="footer-col">
                    <p style={{ color: fontColor }}>Footer nav</p>
                    <ScrollToTop />
                </div>
            </div>
        </footer>
    )
}

export default Footer