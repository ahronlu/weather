import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import { toggleDarkMode, toggleTempValue } from "../actions/themeActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isHome, setIsHome] = useState(true);

  const { darkMode, isFar } = useSelector((state) => state.theme);

  useEffect(() => {
    if (pathname.includes("favorites")) {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [pathname]);

  const toggleDarkLight = () => {
    dispatch(toggleDarkMode());
  };

  const toggleCelFar = () => {
    dispatch(toggleTempValue());
  };

  return (
    <Menu borderless inverted={darkMode}>
      <Menu.Item as={Link} to="/" title="Home">
        Herolo Weather
      </Menu.Item>
      <Menu.Item onClick={toggleDarkLight} title="Dark/Light Mode">
        <Icon name={darkMode ? `sun` : `moon`} />
      </Menu.Item>
      <Menu.Item onClick={toggleCelFar} title="C°/F°">
        {isFar ? `F` : `C`}°
      </Menu.Item>
      <Menu.Item as={Link} to="/" active={isHome} position="right" title="Home">
        <Icon name="home" />
      </Menu.Item>
      <Menu.Item as={Link} to="/favorites" active={!isHome} title="Favorites">
        <Icon name="favorite" />
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
