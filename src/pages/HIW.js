import { useSelector } from "react-redux";
import "../styles/HIW.css"

function HIW() {

    const { bcgColor, fontColor, thirdColor, fourthColor, fivethColor } = useSelector(state => state.color)
    return (
        <main className="hiw-main" style={{ backgroundColor: bcgColor }}>
            <div className="hiw-content">
                <div className="hiw-guide"
                    style={{ backgroundColor: fivethColor }}>
                    <p className="hiw-text"
                        style={{ color: "#ccc" }} >Steps guide</p>
                </div>
                <div className="hiw-promo">
                    <div style={{ height: 100, width: 100, backgroundColor: thirdColor }}></div>
                    <p className="hiw-text"
                        style={{ color: fontColor }} >Mobile App Promo</p>
                </div>
                <div className="hiw-benefits"
                    style={{ backgroundColor: fourthColor }}>
                    <p className="hiw-text"
                    style={{ color: fontColor }} >Benefits</p>
                </div>
                <div className="hiw-faq" 
                style={{ backgroundColor: fourthColor }}>
                    <p className="hiw-text"
                    style={{ color: fontColor }} >FAQ</p>
                </div>
            </div>
        </main>
    )
}


export default HIW