import React,{useState,useContext} from 'react'
import { Wrapper } from 'components/organisms/UsersList/UsersList.styles'
import FormField from 'components/molecules/FormField/FormField'
import { AddButton } from 'components/atoms/AddButton'
import { UsersContext } from 'Provider/UsersProvider'

const initialFormState = {
    name: '',
    attendance: '',
    average: ''
  }

const Form = () => {
  const [formValue, setFormValue] = useState(initialFormState)
  const context = useContext(UsersContext)
  const handleFormChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmitUser = (e) => {
    e.preventDefault()
    context.handleAddUser(formValue)
    setFormValue(initialFormState)
  }

  return (
    <>
        <Wrapper as='form' onSubmit={handleSubmitUser}>
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
    </>
  )
}

export default Form
