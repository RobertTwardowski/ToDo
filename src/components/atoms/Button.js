import React from 'react'
import { ReactComponent as DeleteIcon } from 'assets/delete-icon.svg'
import styled from 'styled-components'


const StyledButton = styled.button`
width: 40px;
height: 40px;
background-color: ${({theme})=> theme.colors.grey};
border-radius: 50px;
border: none;
color: white;
display: flex;
align-items: center;
justify-content: center;

svg{
  width: 100%;
  height: 100%;
}
`

const Button = () => {
  return (
    <StyledButton><DeleteIcon/></StyledButton>
  )
}

export default Button

