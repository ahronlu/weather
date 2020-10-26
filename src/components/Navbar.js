import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Icon, Menu } from "semantic-ui-react";
import { toggleDarkMode } from "../actions/themeActions";

const Navbar = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isHome, setIsHome] = useState(true);

  const { darkMode } = useSelector((state) => state.theme);

  useEffect(() => {
    if (pathname.includes("favorites")) {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [pathname]);

  const handleClick = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <Menu borderless inverted={darkMode}>
      <Menu.Item>Herolo Weather</Menu.Item>
      <Menu.Item onClick={handleClick}>
        <Icon name={darkMode ? `sun` : `moon`} />
      </Menu.Item>
      <Menu.Item as={Link} to="/" active={isHome} position="right">
        Home
      </Menu.Item>
      <Menu.Item as={Link} to="/favorites" active={!isHome}>
        Favorites
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
