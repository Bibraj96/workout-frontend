export default (state = [], action) => {
  switch (action.type) {
    case "SET_MY_WORKOUTS":
      return action.workouts
    default:
      return state
  }
}