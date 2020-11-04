import React from 'react';
import { connect } from 'react-redux'

const Login = ({username, password}) => {
  return (
    <form onSubmit={undefined}>
      <input placeholder="username" type="text" name="username" value={username}  onChange={undefined}/>
      <input placeholder="password" type="text" name="password" value={password}  onChange={undefined}/>
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
    username: state.loginForm.username,
    password: state.loginForm.password
  }
}

export default connect(mapStateToProps)(Login)