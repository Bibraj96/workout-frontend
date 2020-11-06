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

export default connect(null, {getCurrentUser})(App);
