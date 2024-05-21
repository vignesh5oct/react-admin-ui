import React, { useState } from 'react'
import './login.scss'
const Login = () => {

  const [isSignIn, setIsSignIn] = useState(true);

  const handleSignIn = () => {
    setIsSignIn(!isSignIn)
  }

  return (
    <div className='login'>
      <h1 className='title'>{isSignIn ? "Sign In" : "Register"}</h1>
      <div className='form'>
        <form className='formData'>
         {!isSignIn && <input placeholder="Enter Name" className='formItems' type='text' />}
          <input placeholder="Enter Mail" className='formItems' type='email' />
          <input placeholder="Enter Password" className='formItems' type='password' />
          <button>{isSignIn ? "Sign In" : "Register"}</button>
        </form>
        <p onClick={handleSignIn}>New Here !! Click Here to Register</p>
      </div>
    </div>
  )
}

export default Login
