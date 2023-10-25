import React,{ useState }  from 'react'
import axios from 'axios'
function LoginForm(){
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
      });
      const [errorMessage, setErrorMessage] = useState('');
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:5000/api/auth/login', formData);
          console.log(response.data);
          window.location.href = '/user_profile';;
        } catch (error) {
          console.log(error);
          if (error.response) {
            
            setErrorMessage(error.response.data.message);
            alert('Invalid Credentials!! Please try again');
            window.location.reload();
          } else {
            setErrorMessage('An error occurred. Please try again.');
          }
        }
      };
return(
<>
    <div className="sign-up-form">
    <h4>Login</h4>
    <form onSubmit={handleSubmit}>
    <div className="group">
        <label htmlFor="user" className="label">Enter your Name</label><br/>
        <input id="name" type="text" className="input" onChange={handleChange} placeholder="Enter your name" name="name"/>
    </div>
    <div className="group">
        <label htmlFor="pass" className="label">Email Address</label><br/>
        <input id="username" name="username" type="text" className="input" onChange={handleChange} placeholder="Enter your email address" />
    </div>
    <div className="group">
        <label htmlFor="pass" className="label">Password</label><br/>
        <input id="pass" type="password" className="input" data-type="password" name="password" onChange={handleChange} placeholder="Enter your password" />
    </div>
    <div className="group">
        <input type="submit" className="button" value="Sign Up" />
    </div>
    </form>
    {errorMessage && <p>{errorMessage}</p>}
</div>
<p><a href="/register" style={{color:'white'}}>Don't have an account!! Register Yourself here</a></p>
</>
         )
         }
export default LoginForm
        