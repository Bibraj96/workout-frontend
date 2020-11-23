import React from 'react';
import { createWorkout } from '../actions/myWorkouts'
import WorkoutForm from './WorkoutForm.js'
import { connect } from 'react-redux'

const NewWorkoutForm = ({history, createWorkout}) => {

  const handleSubmit = (formData, userId) => {
    createWorkout({
      ...formData,
      userId
    }, history)
  }
  
  return <WorkoutForm history={history} handleSubmit={handleSubmit} />
}

export default connect(null, { createWorkout })(NewWorkoutForm);