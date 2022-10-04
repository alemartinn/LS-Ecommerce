import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from '../features/theme/themeSlice'
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faToggleOff, faToggleOn } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './Header.css'
import Headroom from "headroom.js"

function Header() {


    /* Seccion para cambiar el tema de modo claro a modo oscuro */
    const [themeMode, setThemeMode] = useState(true)
    const { bcgColor, fontColor } = useSelector(state => state.color)
    const dispatch = useDispatch()

    useEffect(() => {
        if (themeMode) {
            dispatch(lightMode())
        } else {
            dispatch(darkMode())
        }
        //implementacion de libreria headroom para togglear header con scroll up/down
        var myHeader = document.querySelector("header");
        var headroom = new Headroom(myHeader);
        headroom.init();
    }, [themeMode, dispatch])

    const navLinks = [ // links del navbar
        {name: "All" , to: "/"},
        {name: "Healthy" , to: "/"},
        {name: "Vegan" , to: "/"},
        {name: "Family" , to: "/"},
        {name: "Gluten-Free" , to: "/"},
        {name: "Pescatarian" , to: "/"},
        {name: "High Protein" , to: "/"},
    ]
    const pages = (item) => (<Link styles={{display:"flex"}} key={item.name} to={item.to}>{item.name}</Link>)

    return (
        <header className='header' style={{ backgroundColor: bcgColor }}>
            <h1 style={{ color: fontColor }}>Header</h1>
            {navLinks.map(pages)}
            <ToggleTheme
                type="button"
                onClick={() => setThemeMode(!themeMode)}
                color={fontColor}
                bcgColor={bcgColor}
            >
                <FontAwesomeIcon
                    icon={themeMode ? faToggleOff : faToggleOn}
                    size="3x"
                    swapOpacity
                />
            </ToggleTheme>
        </header>
    )
}

const ToggleTheme = styled.button`
    color: ${props => props.color};
    background-color: ${props => props.bcgColor};
    outline: none;
    border: none;
    transition: color 1s ease-out;
`
export default Header