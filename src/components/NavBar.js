import React from 'react';
import { connect } from 'react-redux'

const NavBar = ({ logout }) => {

  return (
    <div></div>
  )
}

// This will make the current user available to app to use
// We can destructure currentUser out of our state and use the shorthand currentUser instead of currentUser: currentUser
// Otherwise, state would be our arguement and we'd assign our key like this: currentUser: state.currentUser

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { logout })(NavBar)