import { useSelector } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/NotFound.css"

function NotFound() {
    const {
        bcgColor,
        fontColor,
        thirdColor } = useSelector(state => state.color)
    return (
        <main className="not-found-main" style={{backgroundColor: bcgColor}}>
            <h2 className="not-found-title"
                style={{ color: fontColor }}>404</h2>
            <h2 className="not-found-title"
                style={{ color: fontColor }}>Are you lost?</h2>
            <LinkRouter to="/"
                className="not-found-link"
                style={{color: fontColor, backgroundColor:thirdColor}}
                    >Go Home</LinkRouter>
        </main>
    )
}


export default NotFound