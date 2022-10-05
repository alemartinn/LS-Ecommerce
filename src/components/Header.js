import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "../features/theme/themeSlice";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOff, faToggleOn } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Header.css";
import Headroom from "headroom.js";
import Dropdown from "./Dropdown";
import BasicModal from "./ModalSign";

function Header() {
  /* Seccion para cambiar el tema de modo claro a modo oscuro */
  const [themeMode, setThemeMode] = useState(true);
  const { fontColor, fourthColor } = useSelector((state) => state.color);
  const dispatch = useDispatch();
  const navEl = useRef(null)
  const headerEl = useRef(null)
  const [heightNav, setHeightNav] = useState("10vh")
  const handleResize = () => {
    window.addEventListener("resize",() =>
      setHeightNav(headerEl.current.clientHeight))
  }
  useEffect(() => {
    if (themeMode) {
      dispatch(lightMode());
    } else {
      dispatch(darkMode());
    }
    //implementacion de libreria headroom para togglear header con scroll up/down
    let headroom = new Headroom(navEl.current);
    headroom.init();
    setHeightNav(headerEl.current.clientHeight)
  }, [themeMode, dispatch]);

  const navLink = [
    { name: "HIW", to: "/hiw" },
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
    <>
      <div style={{ backgroundColor: fourthColor, height: heightNav, width: "100%" }} />
      <header className="header" ref={headerEl} onLoad={handleResize}>
        <div style={{ backgroundColor: fourthColor}} className="header-top-conteiner">
          <div className="header-top">
            <h2>logo</h2>
            <h1 style={{ color: fontColor, flexGrow:1,textAlign:"center" }}>LS FOOD CO</h1>
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
              <BasicModal>
                <img 
                  className="header-buttons-img"
                  src="https://cdn-icons-png.flaticon.com/512/6733/6733817.png">
                </img>
              </BasicModal>
              <Link to={"/cartbag"}>
                <img
                  className="header-buttons-img"
                  src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
                ></img>
              </Link>
            </div>
          </div>
        </div>
        <div className="header-nav-conteiner" style={{ backgroundColor: fourthColor }} ref={navEl}>
        <div className="header-nav">
          {navLink.map(pages)}
        </div>
        </div>
      </header>
    </>
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
