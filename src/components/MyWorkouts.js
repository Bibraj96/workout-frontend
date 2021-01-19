import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const MyWorkouts = ({ myWorkouts }) => {
  const workoutCards = myWorkouts.length > 0 ?
    <div id="workouts-container">
      {myWorkouts.map(w =>
      (<div className="workout" key={w.id}><p><Link to={`/workouts/${w.id}`}>{w.title}<br/>{w.date}</Link></p></div>))}
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