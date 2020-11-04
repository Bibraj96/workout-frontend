export const setCurrentUser = user => {
  return {
    type: 'SET_CURRENT_USER',
    user // again, this is just the truncated syntax of user: user
  }
}

