import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavItemBtn,
  NavLinks,
  NavBtnLink
} from './NavbarElement';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to='/' onClick={closeMobileMenu}>
              <NavIcon />
              FTP
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/' onClick={closeMobileMenu}>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/nf' onClick={closeMobileMenu}>
                  News feed
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/request' onClick={closeMobileMenu}>
                  Request
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/setting' onClick={closeMobileMenu}>
                  Setting
                </NavLinks>
              </NavItem>
              <NavItemBtn>
              {button ? (
                  <NavBtnLink to='/sign-IN'>
                    <Button primary>SIGN IN</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/sign-IN'>
                    <Button onClick={closeMobileMenu} fontBig primary>
                      SIGN IN
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;