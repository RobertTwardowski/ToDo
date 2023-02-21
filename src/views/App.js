import React from 'react'
import './App.css'
import Userslist from 'components/organisms/UsersList/UsersList'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import {theme} from 'assets/styles/theme'
import { BrowserRouter as Router,Switch, Route,Link } from 'react-router-dom'

const Wrapper = styled.div`
  background-color: ${({theme})=> theme.colors.LightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

function App () {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <Wrapper>
          <Userslist />
        </Wrapper>
    </ThemeProvider>
  )
}

export default App
