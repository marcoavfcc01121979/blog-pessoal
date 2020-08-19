import React, { useState, useContext } from 'react'
import { Link } from 'gatsby'

//components
import Menu from 'components/Menu'
import Hamburger from 'components/Hamburger'
import MobileMenu from 'components/MobileMenu'
import ModeButton from 'components/ModeButton'
//hooks
import { useSiteConfigQuery } from 'hooks/useSiteConfigQuery'
//context
import { ModeContext } from 'context/ModeProvider'
//styles
import { Wrapper, Logo } from './styles'

const Header = ({ siteTitle = `` }) => {
  const siteConfig = useSiteConfigQuery()
  const [darkMode, setDarkMode] = useContext(ModeContext)
  const [menuOpen, setMenuOpen] = useState(false)

  return(
    <Wrapper>
      <Hamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} items={siteConfig.menu} />
      <Menu items={siteConfig.menu} />
      <Link to="/">
        <img src={siteConfig.logo.publicURL} alt={siteTitle} />
      </Link>
      <ModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
    </Wrapper>
  )
}

export default Header;