import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const MyWorkouts = ({ myWorkouts }) => {
  const workoutCards = myWorkouts.length > 0 ?
  myWorkouts.map(w =>
    (<div className="workouts" key={w.id}><p><Link to={`/workouts/${w.id}`}>{w.title}<br/>{w.date}</Link></p></div>)) :
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