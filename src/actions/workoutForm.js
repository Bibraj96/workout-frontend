// synchronous action creators

export const updateNewWorkoutForm = (name, value) => {
  return {
    type: "UPDATE_NEW_WORKOUT_FORM",
    formData: { name, value }
  }
}

export const resetNewWorkoutForm = () => {
  return {
    type: "RESET_NEW_WORKOUT_FORM"
  }
}

export const setEditWorkoutForm = workout => {
  const workoutFormData = { // Need to explicitly inform redux to populate the form fields with this 
    title: workout.title,
    date: workout.date
  }
  return {
    type: "SET_EDIT_FORM_DATA",
    workoutFormData
  }
}