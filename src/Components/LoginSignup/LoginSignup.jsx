import React, { useState } from 'react'
import './LoginSignup.css'

const LoginSignup = () => {

    const [action, setAction] = useState("Sign Up");

  return (
    <div className='container'>
        
        <div className='header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>

        <div className='inputs'>

            {action === "Login" ? <div></div> :  <div className='input'>
                <input type="text" name="Name" placeholder='FirstName' />
            </div>}
           
            {action === "Login" ? <div></div> :  <div className='input'>
                <input type="text" name="Name" placeholder='LastName' />
            </div>}
            
            <div className='input'>
                <input type="email" name="Email" placeholder='example@gmail.com' />
            </div>

            <div className='input'>
                <input type="password" name="password" placeholder="Password" />
            </div>
        </div>

        {action === "Sign Up" ? <div></div> : <div className='forget-password'>Forget Password ? <span>Click Here!</span> </div> }

        <div className="submit-container">
            <button 
                    className= {action === "Login" ? "Submit grey" : "Submit"} 
                    onClick={()=>{setAction("Sign Up")}} >
                    Sign-Up
            </button>
            <button 
                    className= {action === "Sign Up" ? "Submit grey" : "Submit"} 
                    onClick={()=>{setAction("Login")}} >
                    Login
            </button>
        </div>
    </div>
  )
}

export default LoginSignup