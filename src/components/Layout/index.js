import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

//hooks
import { useMetaDataQuery } from 'hooks/useMetaDataQuery'
//components
import Header from 'components/Header'
//context
import { ModeContext } from 'context/ModeProvider'
//styles
import { GlobalStyles, lightTheme, darkTheme } from 'styles/GlobalStyles'

const Layout = ({ children }) => {
  const data = useMetaDataQuery()
  const [darkMode] = useContext(ModeContext)

  return(
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme} >
      <GlobalStyles />
      <Header siteTitle={data.title} />
      {children}
    </ThemeProvider>
  )
}

export default Layout;