import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { getMyWorkouts, clearWorkouts } from "./myWorkouts.js"

// synchronous action creators
export const setCurrentUser = user => { // we set the user in the argument equal to the user in the store
  return {
    type: 'SET_CURRENT_USER',
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous action creators
export const login = (credentials, history) => {
  console.log("credentials are:", credentials)
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include", // causes browser to send a request with credentials included, even for a cross-origin call
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
        dispatch(resetLoginForm())
        dispatch(getMyWorkouts())
        history.push('/')
      }
    })
    .catch(console.log)
  }
}

export const signup = (credentials, history) => {
  console.log("credentials are:", credentials)
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })
    .then(res => res.json())
    .then(user => {
      if (user.error) {
        alert(user.error)
      } else {
        dispatch(setCurrentUser(user))
        dispatch(resetSignupForm())
        dispatch(getMyWorkouts())
        history.push('/')
      }
    })
    .catch(console.log)
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearWorkouts())
    return fetch("http://localhost:3000/api/v1/logout", {
      credentials: "include", //sends cookies back
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(user => {
        if (user.error) {
          alert(user.error)
        } else {
          dispatch(setCurrentUser(user))
          dispatch(getMyWorkouts())
        }
      })
      .catch(console.log)
  }
}