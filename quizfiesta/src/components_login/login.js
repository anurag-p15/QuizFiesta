import React from 'react'
function LoginForm(){
return(
<>
    <div className="sign-up-form">
    <h4>Login</h4>
    <div className="group">
        <label htmlFor="user" className="label">Enter your Name</label><br/>
        <input id="username" type="text" className="input" placeholder="Enter your username" />
    </div>
    <div className="group">
        <label htmlFor="pass" className="label">Email Address</label><br/>
        <input id="pass" type="text" className="input" placeholder="Enter your email address" />
    </div>
    <div className="group">
        <label htmlFor="pass" className="label">Password</label><br/>
        <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password" />
    </div>
    <div className="group">
        <input type="submit" className="button" value="Sign Up" />
    </div>
</div>
<p><a href="/register" style={{color:'white'}}>Don't have an account!! Register Yourself here</a></p>
</>
         )
         }
export default LoginForm
        