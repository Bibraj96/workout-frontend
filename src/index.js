import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import currentUser from './reducers/currentUser.js'
import loginForm from './reducers/loginForm.js'
import myWorkouts from './reducers/myWorkouts.js'
import signupForm from './reducers/signupForm.js'
import workoutForm from './reducers/workoutForm.js'

const reducer = combineReducers({
  // setting state equal to what the reducer returns
  currentUser,
  loginForm,
  myWorkouts,
  signupForm,
  workoutForm
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
