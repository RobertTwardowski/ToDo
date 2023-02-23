import React, { useState } from 'react'
import { users as usersData } from 'Data/Users'
import {Provider} from 'Provider/UsersProvider.styles'

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {}
})

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(usersData)

  const deleteUser = name => {
    const filteredUsers = users.filter(user => user.name !== name)
    setUsers(filteredUsers)
  }

  const handleAddUser = formValue => {
    const newUser = {
      name: formValue.name,
      attendance: formValue.attendance,
      average: formValue.average
    }

    setUsers([newUser, ...users]) // dodajemy nowego uzytkownika i odajemy wczesniejsza baze inaczej usunelo by cala baze
  }

  return (
      <UsersContext.Provider
        value={{
          users,
          handleAddUser,
          deleteUser
        }}
      >
        <Provider>{children}</Provider>
        
      </UsersContext.Provider>
    
  )
}
