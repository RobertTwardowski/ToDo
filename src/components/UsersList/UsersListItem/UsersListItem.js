
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


function UsersListItem({ userData: { average, name, attendance = '0%' } }) {

  const Wrapper = styled.li`
  display: flex;
  align-items:center;
  position: relative;
  &:not(:last-child)::after{
    content: '';
    position: absolute;
    bottom:0;
    width: 100%;
    height: 1px;
    background-color: lightgrey;
  }
  `
  const StyledButton =styled.button`
  width: 40px;
  height: 40px;
  background-color: #c0c7d6;
  border-radius: 50px;
  border: none;
  `

    return (
        <Wrapper>
          <div>{average}</div>
          <div>
            <p>{name}</p>
            <p>{attendance}</p>
          </div>
          <StyledButton>X</StyledButton>
        </Wrapper>
  )
}

UsersListItem.propTypes = {
    userData: PropTypes.shape({
        average: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        attendance: PropTypes.string,
      })
}

export default UsersListItem
