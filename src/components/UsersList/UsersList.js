import React from 'react'
import UsersListItem from './UsersListItem/UsersListItem'
import { users } from 'Data/Users'

function Userslist () {
  return (
    
    <div>
      <ul>
        {users.map((userData) => (
          <UsersListItem userData={userData} />
        ))}
      </ul>
    </div>
  )
}

export default Userslist
