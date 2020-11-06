import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
      </div>
    );
  }
}

export default connect(null, {getCurrentUser})(App);
