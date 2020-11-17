import React from 'react';
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

// We're using the same handler for both username and password, so we use the event to dynamically grab the name and the value
// so we send an object that represents current state of the form, ...loginForm, from the state
// then we update the name and its value, [name]: value

const Login = ({loginFormData, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData, history)
  }

  return (
    <div className="homeForm">
      <h4 className="homeHeader">Login</h4>
      <form onSubmit={handleSubmit}>
        <input className="formInput"
          placeholder="Username"
          type="text" name="username" 
          value={loginFormData.username}  
          onChange={handleInputChange}
        />
        <input className="formInput"
          placeholder="Password" 
          type="password" 
          name="password" 
          value={loginFormData.password}  
          onChange={handleInputChange}
        /><br/>
        <input className="newButton"
          type="submit" 
          value="Log In"
        />
      </form>
    </div>
  )
}

// This gives us access to these chunks of state from the store as props
// We pass these props into the argument of Login on line 4
// {props: {username: "blendi", password: "password"}}
// You can either use props.username, or use destructuring
const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)
// updateLoginForm again, is using the truncated version of updateLoginForm: updateLoginForm