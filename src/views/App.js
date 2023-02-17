import React from 'react'
import './App.css'
import Userslist from 'components/UsersList/UsersList'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #f7f8fa;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

function App () {
  return (
    <Wrapper>
      <Userslist />
    </Wrapper>
  )
}

export default App
