import React from 'react';
import { createWorkout } from '../actions/myWorkouts'
import WorkoutForm from './WorkoutForm.js'
import { connect } from 'react-redux'

const NewWorkoutFormWrapper = ({history, createWorkout}) => {

  const handleSubmit = (formData, userId) => {
    createWorkout({
      ...formData,
      userId
    }, history)
  }
  
  return <WorkoutForm history={history} handleSubmit={handleSubmit} /> // we're passing these to the WorkoutForm to be invoked
}

export default connect(null, { createWorkout })(NewWorkoutFormWrapper);