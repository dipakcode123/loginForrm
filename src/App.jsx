import React, { useState } from 'react'

import google_svg from './assets/google.svg'
import apple_svg from './assets/apple.svg'
import email_svg from './assets/envelope.svg'
import password_svg from './assets/lock.svg'

const App = () => {

  const [login, setLogin] = useState("Log In");
  
  return (
    <div className='login-container'>
      <h2 className="form-title">Log in with</h2>
      <div className="social-login">
        <button className="social-button">
          <img src={google_svg} alt="" className='social-icon'/>
          Google
        </button>
        <button className="social-button">
          <img src={apple_svg} alt="" className='social-icon'/>
          Apple
        </button>
      </div>
      <p className='separtor'><span>or</span></p>

      <form action="#" className='login-form'>
        <div className="input-wrapper">
          <input type="email" placeholder='Email address' className="inputfield" required />
          <i className="material-symbols-outlined">
            Email
          </i>
        </div>
        <div className="input-wrapper">
          <input type="email" placeholder='Password' className="inputfield" required />
          <i className="material-symbols-outlined">
          lock
          </i>
        </div>
        <a href="#" className="forgot-pass-link">Forgot Password</a>

        <button className='login-button' >Log In</button>
      </form>

      <p className="signup-text">Don&apos;t have an account? <a href="" onClick={()=>{setLogin("Signup now")}}>{login}</a></p>
      {/* <p className="signup-text">Do you have an account? <a href="" onClick={()=>{setLogin("Log In")}}>{login}</a></p> */}

    </div>
  )
}

export default App
