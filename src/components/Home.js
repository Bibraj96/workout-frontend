import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to Your Workout Journal!</h2>
      <Link to="/signup">Sign Up</Link> Or <Link to="/login">Log In</Link>
    </div>
  )
}


export default Home;