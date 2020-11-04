import React from 'react';
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm'

// We're using the same handler for both username and password, so we use the event to dynamically grab the name and the value
// so we send an object that represents current state of the form, ...loginForm, from the state
// then we update the name and its value, [name]: value

const Login = ({loginForm, updateLoginForm }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  return (
    <form onSubmit={undefined}>
      <input placeholder="username" type="text" name="username" value={loginForm.username}  onChange={handleInputChange}/>
      <input placeholder="password" type="text" name="password" value={loginForm.password}  onChange={handleInputChange}/>
      <input type="submit" value="Log In"/>
    </form>
  )
}

// This gives us access to these chunks of state from the store as props
// We pass these props into the argument of Login on line 4
// {props: {username: "blendi", password: "password"}}
// You can either use props.username, or use destructuring
const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, {updateLoginForm})(Login)
// updateLoginForm again, is using the truncated version of updateLoginForm: updateLoginForm