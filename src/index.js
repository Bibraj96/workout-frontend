import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import usersReducer from './reducers/userReducer.js' // I can name this whatever I want b/c it's a defualt export from userReducer.js
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import myWorkouts from './reducers/myWorkouts.js'
import signupForm from './reducers/signupForm.js'
import newWorkoutForm from './reducers/newWorkoutForm.js'

const reducer = combineReducers({
  // setting state equal to what the reducer returns
  users: usersReducer,
  currentUser,
  loginForm,
  myWorkouts,
  signupForm,
  newWorkoutForm
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={ store }>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
