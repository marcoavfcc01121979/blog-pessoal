import React from 'react'

// styles
import { HamburgerIcon } from './styles'

const Hamburger = ({ menuOpen, setMenuOpen }) => (
  <HamburgerIcon
    role="button" 
    menuOpen={menuOpen} 
    onClick={() => setMenuOpen(prev => !prev)}
  >
    <div />
  </HamburgerIcon>
)

export default Hamburger;