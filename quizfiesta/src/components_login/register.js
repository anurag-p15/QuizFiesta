function RegisterForm(){
    return (
        <>
        <div className="sign-up-form">
            <h4>Register Yourself on QuizFiesta</h4>
            <div className="group">
                <label htmlFor="user" className="label">Enter your Name</label>
                <input id="username" type="text" className="input" placeholder="Enter your username" />
            </div>
            <div className="group">
                <label htmlFor="pass" className="label">Email Address</label>
                <input id="pass" type="text" className="input" placeholder="Enter your email address" />
            </div>
            <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" type="password" className="input" data-type="password" placeholder="Create your password" />
            </div>
            <div className="group">
                <label htmlFor="pass" className="label">Repeat Password</label>
                <input id="pass" type="password" className="input" data-type="password" placeholder="Repeat your password" />
            </div>
            <div className="group">
                <label htmlFor="user" className="label">Tell us about yourself</label>
                <input id="bio" type="text" className="input" placeholder="Describe yourself" />
            </div>
            <div className="group">
                <input type="submit" className="button" value="Sign Up" />
            </div>
        </div>
        <p><a href="/login" style={{color:'white'}}>Have an Account!! Login here</a></p>
        </>
    )
}
export default RegisterForm