import { resetNewWorkoutForm } from './workoutForm'

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

export const updateWorkoutForm = workout => { //this workout is the data coming back from the backend
  return {
    type: 'UPDATE_WORKOUT',
    workout
  }
}

export const deleteWorkoutForm = workoutId => { //this workout is the data coming back from the backend
  return {
    type: 'DELETE_WORKOUT',
    workoutId
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

export const createWorkout = (workoutData, history) => {
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
    .then(workout => {
      if (workout.error) {
        alert(workout.error)
      } else {
        dispatch(addWorkout(workout))
        dispatch(resetNewWorkoutForm())
        history.push(`/workouts/${workout.id}`)
      }
    })
    .catch(console.log)
  }
}

export const updateWorkout = (workoutData, history) => {
  return dispatch => {
    const snakeWorkoutData = { // Only needed this for user_id, but did it for the others to keep consistent
      title: workoutData.title,
      date: workoutData.date
    }
    return fetch(`http://localhost:3000/api/v1/workouts/${workoutData.workoutId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(snakeWorkoutData)
    })
    .then(res => res.json())
    .then(workout => {
      if (workout.error) {
        alert(workout.error)
      } else {
        dispatch(updateWorkoutForm(workout))
        history.push(`/workouts/${workout.id}`)
      }
    })
    .catch(console.log)
  }
}

export const deleteWorkout = (workoutId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/workouts/${workoutId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(res => res.json())
    .then(workout => {
      if (workout.error) {
        alert(workout.error)
      } else {
        dispatch(deleteWorkoutForm(workoutId))
        history.push("/workouts")
      }
    })
    .catch(console.log)
  }
}
