import React, {Component} from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Logout from './components/Logout.js'
import Signup from './components/Signup.js'
import MyWorkouts from './components/MyWorkouts.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn } = this.props
    return (
      <Router>
        <div className="App">
          { loggedIn ? <Logout /> : null }
          <NavBar />
          {/* <MainContainer /> */}
          <Switch>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/' render={() => loggedIn ? <MyWorkouts /> : <Home />}/>
            <Route exact path='/my-workouts' component={MyWorkouts}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}

export default connect(mapStateToProps, {getCurrentUser})(App);
