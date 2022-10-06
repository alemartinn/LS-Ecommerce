import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "../features/theme/themeSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Headroom from "react-headroom"

import "../styles/Header.css";
import "../styles/ThemeButton.css";
import Dropdown from "./Dropdown";
import { openModal, specifyModal } from '../features/modal/modalSlice';

function Header() {
  const dispatch = useDispatch()
  const multiDispatcher = (modalType) => {
    dispatch(openModal())
    dispatch(specifyModal(modalType))
  }
  /* Seccion para cambiar el tema de modo claro a modo oscuro */
  const [themeMode, setThemeMode] = useState(true);
  const { fontColor, fourthColor, bcgColor } = useSelector((state) => state.color);
  useEffect(() => {
    if (themeMode) {
      dispatch(lightMode());
    } else {
      dispatch(darkMode());
    }
  }, [themeMode, dispatch]);

  const navLink = [
    { name: "HIW", to: "/hiw" },
    {
      name: "Products",
      to: "/",
      navLinks: [
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
    { name: "Contact", to: "/contact" },
  ];
  const styleDropdown = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    backgroundColor: bcgColor,
  }
  const pages = (item) =>
    item.navLinks ? (
      <Dropdown name={item.name} links={item.navLinks} textColor={fontColor} key={item.name} styles={styleDropdown} />
    ) : (
      <Link className="link" style={{ color: fontColor }} key={item.name} to={item.to}>
        {item.name}
      </Link>
    );

  return (
    <Headroom wrapperStyle={{ backgroundColor: bcgColor }}>
      <div style={{ backgroundColor: fourthColor }} className="header-top-conteiner">
        <div className="header-top">
          <div className="header-logo-container">
            <img src="images/logo.png" alt="logo" className="header-logo" />
          </div>
          <h1 className="header-title"
            style={{ color: fontColor }}>LS FOOD CO</h1>
          <div className="header-buttons">
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => setThemeMode(!themeMode)}
              />
              <span className="slider" />
            </label>
            <img
              onClick={() => multiDispatcher('signIn')}
              className="header-buttons-img"
              alt="profile"
              src="https://cdn-icons-png.flaticon.com/512/6733/6733817.png">
            </img>
            <Link to={"/cartbag"}>
              <img
                className="header-buttons-img"
                alt="cart"
                src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              ></img>
            </Link>
          </div>
        </div>
      </div>
      <div className="header-nav-conteiner" style={{ backgroundColor: fourthColor }}>
        <div className="header-nav">
          {navLink.map(pages)}
        </div>
      </div>
    </Headroom>
  );
}

export default Header;
