import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Button from '../../atoms/Button'


function UsersListItem ({ userData: { average, name, attendance = '0%' } }) {
  const Wrapper = styled.li`
    display: flex;
    align-items: center;
    position: relative;
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 1px;
      background-color: lightgrey;
    }
  `
  const Average= styled.div`
  display: flex;
  padding: 10px;
  border-radius:50px;
  flex: start;
  margin: 1rem;
  background: #333;
  `
  const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  p{
    margin: 0;
    padding-right: 1rem;
  }
  `


  return (
    <Wrapper>
      <Average>{average}</Average>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance:{attendance}</p>
      </StyledInfo>
      <Button/>
    </Wrapper>
  )
}

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string
  })
}

export default UsersListItem
