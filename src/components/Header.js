import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "../features/theme/themeSlice";
import { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Headroom from "react-headroom"

import "../styles/Header.css";
import "../styles/ThemeButton.css";
import Dropdown from "./Dropdown";
import { openModal, specifyModal } from '../features/modal/modalSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const {cartTotalQuantity} = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const multiDispatcher = (modalType) => {
    dispatch(openModal())
    dispatch(specifyModal({ name: modalType }))
  }
  /* Seccion para cambiar el tema de modo claro a modo oscuro */
  const [themeMode, setThemeMode] = useState(true);
  const { fontColor, fourthColor, bcgColor, light } = useSelector((state) => state.color);
  const { user } = useSelector(state => state.user)
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
      to: "/products",
      navLinks: [
        { name: "All", to: "/products" },
        { name: "Healthy", to: "/" },
        { name: "Vegan", to: "/" },
        { name: "Family", to: "/" },
        { name: "Gluten-Free", to: "/" },
        { name: "Pescatarian", to: "/" },
        { name: "High Protein", to: "/" },
      ],
    },
    {
      name: "Recipes",
      to: "/recipes",
      navLinks: [
        { name: "All", to: "/recipes" },
        { name: "Healthy", to: "/recipes" },
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
      <Dropdown name={item.name} links={item.navLinks} textColor={!light ? fontColor : 'var(--fifth-color)'} key={item.name} styles={styleDropdown} />
    ) : (
      <LinkRouter className="link" style={!light ? { color: fontColor } : { color: 'var(--fifth-color)' }} key={item.name} to={item.to}>
        {item.name}
      </LinkRouter>
    );

  return (
    <Headroom wrapperStyle={{ backgroundColor: bcgColor }}>
      <div style={{ backgroundColor: fourthColor }} className="header-top-conteiner">
        <div className="header-top">
          <LinkRouter to='' className="header-logo-container">
            <img src="images/logo.png" alt="logo" className="header-logo" />
          </LinkRouter>
          <LinkRouter to='' className="header-title-link">
            <h1 className="header-title" style={{ color: fontColor }}> LS FOOD CO </h1>
          </LinkRouter>
          <div className="header-buttons">
            <label className="switch">
              <input
                type="checkbox"
                onClick={() => setThemeMode(!themeMode)}
              />
              <span className="slider" />
            </label>
            {/* <img
              onClick={() => multiDispatcher(user?.name?'profile':'signIn')}
              className="header-buttons-img"
              alt="profile"
              src={user?.photo || "https://cdn-icons-png.flaticon.com/512/6733/6733817.png"}>
            </img> */}
            <button style={{ outline: 'none', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color: fontColor }}
              onClick={() => multiDispatcher(user?.name ? 'profile' : 'signIn')}
            >
              <FontAwesomeIcon icon={faUser} color={fontColor} size='2x' />
            </button>
            <LinkRouter to={"/cartbag"} className="header-cartbag" style={{ textDecoration: 'none' }} >
              {/* <img
                className="header-buttons-img"
                alt="cart"
                src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              ></img> */}
              <FontAwesomeIcon icon={faCartShopping} color={fontColor} size='2x' />
              <span className="cartbag-quantity">{cartTotalQuantity}</span>
            </LinkRouter>
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
