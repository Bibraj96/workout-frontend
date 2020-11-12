export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_WORKOUTS":
      return action.workouts
    case "ADD_WORKOUT":
      return state.concat(action.workout)
    case "CLEAR_WORKOUTS":
      return []
    default:
      return state
  }
}