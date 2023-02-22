import React from 'react'
import {
  Logo,
  StyledLink,
  Wrapper
} from 'components/organisms/Navigation/Navigation.styles'

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink activeClassName='active-link' exact to='/'>Dashboard</StyledLink>
      <StyledLink activeClassName='active-link' exact to='/add-user'>Add user</StyledLink>
    </Wrapper>
  )
}

export default Navigation
