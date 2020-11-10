// synchronous action creators

export const updateNewWorkoutForm = (name, value) => {
  return {
    type: "UPDATE_NEW_WORKOUT_FORM",
    formData: { name, value }
  }
}