import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className='loginsingup'>
        <div className="loginsignup-container">
        <h1>Sigh Up</h1>
        <div className="loginsignup-field">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Aassword' />
        </div>
        <button>Continue</button>
        <p className='loginsignup-login'>Already have an account?<span>   Login</span></p>
      <div className="loginsignup-agree">
        <input type="checkbox" name='' id='' />
        <p>By continuing i agree to term of use & privacy policy</p>
      </div>
      </div>
    </div>
  )
}

export default Login