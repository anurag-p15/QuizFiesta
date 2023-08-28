function LoginForm () {
    return (
        <div className="row" style={{ margin: '5% 2%'}}>
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
                      <label htmlFor="user" className="label">Username</label>
                      <input id="user" type="text" className="input" placeholder="Create your Username" />
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
                      <label htmlFor="pass" className="label">Email Address</label>
                      <input id="pass" type="text" className="input" placeholder="Enter your email address" />
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
        <div className="col-lg-6 mx-auto px-5">
          <div className="text-login" style={{ marginLeft: '5%',marginRight:'5%'}}>
            <div>
              <div>
                <p>Login/Register</p>
              </div>
              <div>
                <p style={{ textAlign: 'left' }}>Ready to join the QuizFiesta community? Create your account now and unlock a realm of knowledge
                 and fun. With a simple sign-up, you'll gain access to a variety of engaging quizzes that spark curiosity and enhance your 
                 learning experience. Let's embark on this educational adventure together – sign up today and let the quizzing begin!</p>
                <p style={{ textAlign: 'center' }}>Already a Registered User? </p><p style={{textAlign:'left'}}>Log in to your account to dive into a world of captivating quizzes, challenge your friends, 
                and expand your knowledge horizons. Your next quiz adventure awaits!</p>
                <p style={{textAlign:'left'}}>Your Privacy Matters to Us! Your login information is safe and secure with QuizFiesta. We value your trust and want to assure
                   you that your personal details are never shared. Logging in not only ensures the safety of your account but also enhances your 
                   in-app experience, allowing you to explore a world of knowledge and fun seamlessly. Join us with confidence, and let the 
                   quizzing adventure begin!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
}

export default LoginForm;
