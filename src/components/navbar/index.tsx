import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import NightsStayIcon from '@material-ui/icons/NightsStay';
import { NavbarContainer } from './style';

import { ThemeContext } from '../../context/theme';

const Navbar: React.FC = () => {
  const {theme, handleToggleTheme } = useContext(ThemeContext)

  return (
    <NavbarContainer>
      <Link to="/"><h1> Where is in the world?</h1></Link>
      <div onClick={handleToggleTheme}>
        <NightsStayIcon />
        <span>{theme.title === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;