import React from 'react'
import PropTypes from 'prop-types'
import Button from '../../atoms/Button'
import { Average } from './Average.styles'
import { StyledInfo, Wrapper } from './UsersListItem.styles'

function UsersListItem ({
  deleteUser,
  userData: {  average, name, attendance = '0%' }
}) {
  return (
    <Wrapper>
      <Average value={average}>{average}</Average>
      <StyledInfo>
        <p>{name}</p>
        <p>attendance:{attendance}</p>
      </StyledInfo>
      <Button onClick={() => deleteUser(name)} />
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
