import React from 'react'

const Register = () => {
  return (
    <div className='login'>
            <h1>register</h1>
      <input placeholder='username' className='loginInput' type="text"></input>
      <input placeholder='email' className='loginInput' type="text"></input>
      <input placeholder='password' className='loginInput' type="password"></input>
      
      <button className='loginButton'>Register</button>
    </div>
  )
}

export default Register
