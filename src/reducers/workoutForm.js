const initialState = {
  title: "",
  date: "",
  description: ""
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_WORKOUT_FORM":
      return {
        ...state,
        [action.formData.name]: action.formData.value
      }
    case "RESET_NEW_WORKOUT_FORM":
      return initialState
    case "SET_EDIT_FORM_DATA":
      return action.workoutFormData
    default:
      return state
  }
}