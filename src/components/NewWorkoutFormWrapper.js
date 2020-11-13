import React from 'react';
import { createWorkout } from '../actions/myWorkouts'
import WorkoutForm from './WorkoutForm.js'
import { connect } from 'react-redux'

const NewWorkoutFormWrapper = ({history, createWorkout}) => {

  const handleSubmit = (event, formData, userId, history) => {
    event.preventDefault()
    console.log("Got to WorkoutFormWrapper")
    createWorkout({
      ...formData,
      userId
    }, history)
  }
  
  return <WorkoutForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createWorkout })(NewWorkoutFormWrapper);