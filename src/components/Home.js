import React from 'react';
import Login from './Login.js'
import Signup from './Signup.js'
import { Link } from 'react-router-dom'

const Home = ({}) => {
  return (
    <div>
      <h2>Welcome to Your Workout Journal!</h2>
      <Link to="/signup">Sign Up</Link> Or <Link to="/login">Log In</Link>
    </div>
  )
}


export default Home;