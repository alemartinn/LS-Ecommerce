import { useSelector } from "react-redux";

function Footer() {

    const { bcgColor, fontColor } = useSelector(state => state.color)

    return (
        <footer style={{backgroundColor: bcgColor}}>
            <h3 style={{color: fontColor}}>Footer</h3>
        </footer>
    )
}

export default Footer