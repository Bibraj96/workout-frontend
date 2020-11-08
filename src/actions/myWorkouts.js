export const setMyWorkouts = workouts => { // we set the user in the argument equal to the user in the store
  return {
    type: 'SET_MY_WORKOUTS',
    workouts // again, this is just the truncated syntax of user: user
  }
}