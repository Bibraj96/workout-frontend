// synchronous action creators
export const setMyWorkouts = workouts => {
  return {
    type: 'SET_MY_WORKOUTS',
    workouts
  }
}

export const clearWorkouts = workouts => {
  return {
    type: 'CLEAR_WORKOUTS'
  }
}

export const addWorkout = workout => {
  return {
    type: 'ADD_WORKOUT',
    workout
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

export const createWorkout = workoutData => {
  return dispatch => {
    const snakeWorkoutData = { // Only needed this for user_id, but did it for the others to keep consistent
      title: workoutData.title,
      date: workoutData.date,
      user_id: workoutData.userId
    }
    return fetch("http://localhost:3000/api/v1/workouts", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(snakeWorkoutData)
    })
    .then(res => res.json())
    .then(console.log)
    .catch(console.log)
  }
}