import React, { useState, useEffect } from 'react'
import { users as usersData } from 'Data/Users'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'
import { StyledList, Wrapper } from './UsersList.styles'
import FormField from 'components/molecules/FormField/FormField'
import { AddButton } from 'components/atoms/AddButton'

const initialFormState ={
  name: '',
  attendance: '',
  average: ''
}

const mockAPI = success => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData])
      } else {
        reject({ message: 'Error' })
      }
    }, 1000)
  })
}

const UsersList = () => {
  const [users, setUsers] = useState([])
  const [isLoading, setLoadingState] = useState([])
  const [formValue, setFormValue] = useState(initialFormState)

  useEffect(() => {
    setLoadingState(true)
    mockAPI()
      .then(data => {
        setLoadingState(false)
        setUsers(data)
      })
      .catch(err => console.log(err))
  }, [])

  const deleteUser = name => {
    const filteredUsers = users.filter(user => user.name !== name)
    setUsers(filteredUsers)
  }

  const handleFormChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }

  const handleAddUser = e => {
    e.preventDefault()
    const newUser = {
      name: formValue.name,
      attendance: formValue.attendance,
      average: formValue.average
    }

    setUsers([newUser, ...users]) // dodajemy nowego uzytkownika i odajemy wczesniejsza baze inaczej usunelo by cala baze
  
    setFormValue(initialFormState)
  }

  return (
    <>
      <Wrapper as='form' onSubmit={handleAddUser}>
        <h1>Add New Student</h1>
        <FormField
          label='Name'
          id='name'
          name='name'
          value={formValue.name}
          onChange={handleFormChange}
        />
        <FormField
          label='Attendance'
          id='attendance'
          name='attendance'
          value={formValue.attendance}
          onChange={handleFormChange}
        />
        <FormField
          label='Average'
          id='average'
          name='average'
          value={formValue.average}
          onChange={handleFormChange}
        />
        <AddButton type='submit'>Add</AddButton>
      </Wrapper>
      <Wrapper>
        <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
        <StyledList>
          {users.map(userData => (
            <UsersListItem
              deleteUser={deleteUser}
              key={userData.name}
              userData={userData}
            />
          ))}
        </StyledList>
      </Wrapper>
    </>
  )
}

export default UsersList
