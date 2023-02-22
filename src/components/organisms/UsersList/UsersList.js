import React,{useContext} from 'react'
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem'
import { StyledList, Wrapper } from './UsersList.styles'
import { UsersContext } from 'Provider/UsersProvider'



const UsersList = () => {
  const {users} = useContext(UsersContext)

  return (
    <>
      <Wrapper>
        <StyledList users={users}>
          {users.map(userData => (
            <UsersListItem
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
