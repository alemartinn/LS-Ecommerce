import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "../features/theme/themeSlice";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Headroom from "headroom.js";
import Dropdown from "./Dropdown";

function Header() {
  /* Seccion para cambiar el tema de modo claro a modo oscuro */
  const [themeMode, setThemeMode] = useState(true);
  const { bcgColor, fontColor, fourthColor } = useSelector((state) => state.color);
  const dispatch = useDispatch();

  useEffect(() => {
    if (themeMode) {
      dispatch(lightMode());
    } else {
      dispatch(darkMode());
    }
    //implementacion de libreria headroom para togglear header con scroll up/down
    var myHeader = document.querySelector("header");
    var headroom = new Headroom(myHeader);
    headroom.init();
  }, [themeMode, dispatch]);

  const navLink = [
    { name: "HIW", to: "/" },
    {
      name: "Products",
      to: "/",
      navLinks: [
        // links del navbar
        { name: "All", to: "/" },
        { name: "Healthy", to: "/" },
        { name: "Vegan", to: "/" },
        { name: "Family", to: "/" },
        { name: "Gluten-Free", to: "/" },
        { name: "Pescatarian", to: "/" },
        { name: "High Protein", to: "/" },
      ],
    },
    {
      name: "Blog",
      to: "/",
      navLinks: [
        { name: "All", to: "/" },
        { name: "Healthy", to: "/" },
      ],
    },
    { name: "Contact", to: "/" },
  ];

  const pages = (item) =>
    item.navLinks ? (
      <>
        {/* <Link styles={{display:"flex"}} key={item.name} to={item.to}>{item.name}</Link> */}
        <Dropdown name={item.name} links={item.navLinks} />
      </>
    ) : (
      <Link className="link" styles={{ display: "flex" }} key={item.name} to={item.to}>
        {item.name}
      </Link>
    );

  return (
    <header className="header" style={{ backgroundColor: fourthColor }}>
        <div className="header-top">
            <h2>logo</h2>
            <h1 style={{ color: fontColor }}>LS FOOD CO</h1>
            <div className="header-buttons">
            <ToggleTheme
            type="button"
            onClick={() => setThemeMode(!themeMode)}
            color={fontColor}
            bcgColor={fourthColor}
            >
                <FontAwesomeIcon
                    icon={themeMode ? faToggleOff : faToggleOn}
                    size="3x"
                    swapOpacity
                    />
                </ToggleTheme>
            <Link to={"/"}>
            <img
                className="header-buttons-img"
                src="https://cdn-icons-png.flaticon.com/512/6733/6733817.png"
                ></img>
            </Link>
            <Link to={"/"}>
            <img
                className="header-buttons-img"
                src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                ></img>
            </Link>
            </div>
        </div>
        <div className="header-nav">
            {navLink.map(pages)}
        </div>
    </header>
  );
}

const ToggleTheme = styled.button`
  color: ${(props) => props.color};
  background-color: ${(props) => props.bcgColor};
  outline: none;
  border: none;
  transition: color 1s ease-out;
`;
export default Header;
