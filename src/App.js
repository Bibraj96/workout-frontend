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
import WorkoutForm from './components/WorkoutForm.js'
import WorkoutCard from './components/WorkoutCard.js'
import NewWorkoutFormWrapper from './components/NewWorkoutFormWrapper.js'
import EditWorkoutFormWrapper from './components/EditWorkoutFormWrapper.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    const { loggedIn, workouts } = this.props
    return (
      <Router>
        <div className="App">
         { loggedIn ? <NavBar /> : null} 
          {/* <MainContainer /> */}
          <Switch>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/' render={() => loggedIn ? <MyWorkouts /> : <Home />}/>
            <Route exact path='/workouts' component={MyWorkouts}/>
            <Route exact path='/workouts/new' component={NewWorkoutFormWrapper}/> {/*when we use component=, props are implicitly provided*/} 
            <Route exact path='/workouts/:id' render={ props => {
              const workout = workouts.find(workout => workout.id == props.match.params.id)
              // console.log(props.match.params.id)
              return <WorkoutCard workout={workout} {...props} />
              }
            }/>
            <Route exact path='/workouts/:id/edit' render={ props => { //these props are whatever Route would've passed down as props
              const workout = workouts.find(workout => workout.id == props.match.params.id)
              // console.log(props.match.params.id)
              return <EditWorkoutFormWrapper workout={workout} {...props} />
              }
            }/>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser,
    workouts: state.myWorkouts
  })
}

export default connect(mapStateToProps, {getCurrentUser})(App);
