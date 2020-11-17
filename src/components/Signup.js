import React from 'react';
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'

const Signup = ({signupFormData, updateSignupForm, signup, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...signupFormData,
      [name]: value
    }
    updateSignupForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    signup(signupFormData, history)
  }

  return (
    <div className="homeForm">
      <h4 className="homeHeader">Signup</h4>
      <form onSubmit={handleSubmit}>
        <input className="formInput"
          placeholder="Email" 
          type="text" name="email" 
          value={signupFormData.email}  
          onChange={handleInputChange}
        />
        <input className="formInput"
          placeholder="Username" 
          type="text" 
          name="username" 
          value={signupFormData.username}  
          onChange={handleInputChange}
        />
        <input className="formInput"
          placeholder="Password" 
          type="password" 
          name="password" 
          value={signupFormData.password}  
          onChange={handleInputChange}
        /><br/>
        <input className="newButton"
          type="submit" 
          value="Sign Up"
        />
      </form>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    signupFormData: state.signupForm
  }
}

export default connect(mapStateToProps, { updateSignupForm, signup })(Signup)
