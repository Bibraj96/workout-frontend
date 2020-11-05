import React, {Component} from 'react';
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      //maybe refactor to navbar
      this.props.currentUser ? <Logout /> : <Login />
    );
  }
}

// This will make the current user available to app to use
// We can destructure currentUser out of our state and use the shorthand currentUser instead of currentUser: currentUser
// Otherwise, state would be our arguement and we'd assign our key like this: currentUser: state.currentUser
const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, {getCurrentUser})(App);
