import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const handleToggleSignIn = () => {
 setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
        <Header/>
        <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/335ddde7-3955-499c-b4cc-ca2eb7e1ae71/a7d20bc1-831c-4f9d-8153-11bdf7a08d23/IN-en-20240624-POP_SIGNUP_TWO_WEEKS-perspective_WEB_13cda806-d858-493e-b4aa-f2792ff965dc_small.jpg'
        alt='background'/>
        </div>
        <form className='my-36 mx-auto w-3/12 bg-black absolute left-0 right-0 p-12 text-white rounded-lg bg-opacity-80'>
        <h1 className='text-3xl font-bold py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {
            !isSignInForm &&
            <input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>
        }
            <input type='text' placeholder='Email' className='p-4 my-4 w-full bg-gray-700'/>
            <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
            <button type='submit' className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
            <p className='p-4 cursor-pointer' onClick={handleToggleSignIn} >{isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already Registered? Sign In Now'}</p>
        </form>
    </div>
  )
}

export default Login