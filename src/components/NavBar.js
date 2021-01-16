import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Logout from './Logout.js'

const NavBar = ({ currentUser, loggedIn }) => {

  return (
    <div className="navbar">
      {currentUser ? <h4 className="getActive">Get active, {currentUser.username}!</h4> : ""}
      <NavLink className="link" exact active="true" to="/workouts">My Workouts</NavLink>
      <NavLink className="link" exact active="true" to="/workouts/new">New Workout</NavLink>
      { loggedIn ? <Logout /> : null }
    </div>
  )
}

// This will make the current user available to app to use
// We can destructure currentUser out of our state and use the shorthand currentUser instead of currentUser: currentUser
// Otherwise, state would be our arguement and we'd assign our key like this: currentUser: state.currentUser

const mapStateToProps = ({ currentUser}) => {
  return {
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar)
