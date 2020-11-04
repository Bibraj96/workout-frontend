import React from 'react';

const Login = () => {
  return (
    <form onSubmit={undefined}>
      <input placeholder="username" type="text" name="username" value={undefined}  onChange={undefined}/>
      <input placeholder="password" type="text" name="password" value={undefined}  onChange={undefined}/>
      <input type="submit" value="Log In"/>
    </form>
  )
}

export default Login