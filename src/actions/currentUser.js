// synchronous action creators
export const setCurrentUser = user => { // we set the user in the argument equal to the user in the store
  return {
    type: 'SET_CURRENT_USER',
    user // again, this is just the truncated syntax of user: user
  }
}

// asynchronous action creators
export const login = credentials => {
  console.log("credentials are:", credentials)
  return dispatch => {
    return fetch("http:localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
  }
}