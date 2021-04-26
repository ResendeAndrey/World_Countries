import React, { useContext } from 'react';

import NightsStayIcon from '@material-ui/icons/NightsStay';
import { NavbarContainer } from './style';

import { ThemeContext } from '../../context/theme';

const Navbar: React.FC = () => {
  const {handleToggleTheme } = useContext(ThemeContext)

  return (
    <NavbarContainer>
      <a href=""><h1> Where is in the world?</h1></a>
      <div onClick={handleToggleTheme}>
        <NightsStayIcon />
        <span>Darkmode</span>
      </div>
    </NavbarContainer>
  );
}

export default Navbar;