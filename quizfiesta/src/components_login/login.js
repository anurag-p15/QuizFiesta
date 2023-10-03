function LoginForm () {
    return (
      <div className="row">
         <div className="col-lg-6 mx-auto p-7">
          <div className="card" style={{ margin: '2% 5%',borderRadius:'3vh' }}>
            <div className="login-box">
              <div className="login-snip">
                <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked />
                <label htmlFor="tab-1" className="tab">Login</label>
                <input id="tab-2" type="radio" name="tab" className="sign-up" />
                <label htmlFor="tab-2" className="tab">Sign Up</label>
                <div className="login-space">
                  <div className="login">
                    <div className="group">
                      <label htmlFor="user" className="label">Username</label>
                      <input id="user" type="text" className="input" placeholder="Enter your username" />
                    </div>
                    <div className="group">
                      <label htmlFor="pass" className="label">Password</label>
                      <input id="pass" type="password" className="input" data-type="password" placeholder="Enter your password" />
                    </div>
                    <div className="group">
                      <input id="check" type="checkbox" className="check" defaultChecked />
                      <label htmlFor="check"><span className="icon"></span> Keep me Signed in</label>
                    </div>
                    <div className="group">
                      <input type="submit" className="button" value="Sign In" />
                    </div>
                    <div className="hr"></div>
                    <div className="foot">
                      <a href="#">Forgot Password?</a>
                    </div>
                  </div>
                  <div className="sign-up-form">
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
                    <div className="hr"></div>
                    <div className="foot">
                      <label htmlFor="tab-1">Already Member?</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
    );
}
  
export default LoginForm;
