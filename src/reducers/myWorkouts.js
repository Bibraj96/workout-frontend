export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_WORKOUTS":
      return action.workouts
    case "CLEAR_WORKOUTS":
      return []
    default:
      return state
  }
}