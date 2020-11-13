export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_WORKOUTS":
      return action.workouts
    case "ADD_WORKOUT":
      return state.concat(action.workout)
    case "UPDATE_WORKOUT":
      console.log("in update workout")
      return state
    case "CLEAR_WORKOUTS":
      return []
    default:
      return state
  }
}