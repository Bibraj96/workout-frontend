import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const MyWorkouts = ({ myWorkouts }) => {
  const workoutCards = myWorkouts.length > 0 ?
    <div id="workouts-container">
      {myWorkouts.map(w =>
      (<Link to={`/workouts/${w.id}`} key={w.id}><div className="workout"><p>{w.title}<br/>{w.date}</p></div></Link>))}
    </div> :
  null

  return (
    workoutCards
  )
}

const mapStateToProps = ({myWorkouts}) => {
  return {
    myWorkouts
  }
}

export default connect(mapStateToProps)(MyWorkouts)