import React from 'react'
import WorkoutCard from './WorkoutCard.js'
import { connect } from 'react-redux'

const MyWorkouts = ({ myWorkouts }) => {
  const workoutCards = myWorkouts.map(w => <WorkoutCard workout={w} key={w.id}/>)
  return (
    workoutCards
  )
}

//takes state of store as argument, which we then destructure 
const mapStateToProps = ({myWorkouts}) => {
  return {
    myWorkouts
  }
}

export default connect(mapStateToProps)(MyWorkouts)