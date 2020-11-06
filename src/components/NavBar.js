import React from 'react';
import { connect } from 'react-redux'

const NavBar = ({ logout }) => {

  return (
    <div></div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { logout })(NavBar)