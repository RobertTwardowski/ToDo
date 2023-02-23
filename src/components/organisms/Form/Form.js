import React,{useReducer,useContext} from 'react'
import { Wrapper } from 'components/organisms/UsersList/UsersList.styles'
import FormField from 'components/molecules/FormField/FormField'
import { AddButton } from 'components/atoms/AddButton'
import { UsersContext } from 'Provider/UsersProvider'

const initialFormState = {
    name: '',
    attendance: '',
    average: ''
  }
  const reducer = (state, action) =>
  {
    switch(action.type){
      case "INPUT CHANGE" :
        return{
          ...state,
          [action.field]: action.value,
        }
        case 'CLEAR VALUES':
          return initialFormState
        default:
          return state;
    }
  }

const Form = () => {
  const [formValue, dispatch] = useReducer(reducer, initialFormState)
  const context = useContext(UsersContext)
  const handleFormChange = e => {
    dispatch({
      type:'INPUT CHANGE',
      field: e.target.name,
      value: e.target.value,
    })
  }
  const handleSubmitUser = (e) => {
    e.preventDefault()
    context.handleAddUser(formValue)
    dispatch({type:'CLEAR VALUES'})
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
