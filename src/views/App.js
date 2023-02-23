import React from 'react'
import './App.css'
import Userslist from 'components/organisms/UsersList/UsersList'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle } from 'assets/styles/GlobalStyle'
import { theme } from 'assets/styles/theme'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Form from 'components/organisms/Form/Form'
import Navigation from 'components/organisms/Navigation/Navigation'
import { UsersProvider} from 'Provider/UsersProvider'

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.LightGrey};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 100vh;
  width: 100%;
`



function App () {

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <UsersProvider>
            <Navigation />
            <Wrapper>
            <Switch>
              <Route path='/add-user'>
                <Form/>
              </Route>
              <Route path='/'>
                <Userslist />
              </Route>
            </Switch>
            </Wrapper>
          </UsersProvider>
        </Wrapper>
      </ThemeProvider>
    </Router>
  )
}

export default App
