// synchronous action creators
export const setMyWorkouts = workouts => {
  return {
    type: 'SET_MY_WORKOUTS',
    workouts
  }
}

// asynchronous action creators
export const getMyWorkouts = () =>  {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/workouts", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(workouts => {
        if (workouts.error) {
          alert(workouts.error)
        } else {
          console.log(workouts)
          dispatch(setMyWorkouts(workouts))
        }
      })
      .catch(console.log)
  }
}