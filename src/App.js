import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js'
import Login from './components/Login/js'
import Logout from './components/Logout/js'
import MyWorkouts from './components/MyWorkouts/js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBar />
        <MainContainer />
        <Router>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/logout' component={Logout}/>
          <Route exact path='/my-workouts' component={MyWorkouts}/>
        </Router>
      </div>
    );
  }
}

export default connect(null, {getCurrentUser})(App);
