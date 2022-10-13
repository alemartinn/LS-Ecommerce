import { useDispatch, useSelector } from "react-redux";
import { darkMode, lightMode } from "../features/theme/themeSlice";
import { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import Headroom from "react-headroom"
import "../styles/Header.css";
import "../styles/ThemeButton.css";
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
    { name: "Products", to: "/products"},
    { name: "Recipes", to: "/recipes"},
    { name: "Contact", to: "/contact" },
  ];
  const pages = (item) =>(
      <LinkRouter className="link" style={!light ? { color: fontColor } : { color: 'var(--fifth-color)' }} key={item.name} to={item.to}>
        {item.name}
      </LinkRouter>
    );

  return (
    <Headroom wrapperStyle={{ backgroundColor: bcgColor }}>
      <div style={{ backgroundColor: fourthColor }} className="header-top-conteiner">
        <div className="header-top">
          <LinkRouter to='' className="header-logo-container">
            <img src="/images/logo.png" alt="logo" className="header-logo" />
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
            <button style={{ outline: 'none', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', color: fontColor }}
              onClick={() => multiDispatcher(user?.name ? 'profile' : 'signIn')}
            >
              {user.photo ? <img alt={user.name}
                className="header-buttons-img" src={user.photo} />
              :<FontAwesomeIcon icon={faUser} color={fontColor} size='2x' />}
            </button>
            <LinkRouter to={"/cartbag"} className="header-cartbag" style={{ textDecoration: 'none' }} >
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
