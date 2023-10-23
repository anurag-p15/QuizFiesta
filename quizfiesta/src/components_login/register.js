import React,{ useState } from 'react'
import axios from 'axios'

function RegisterForm(){
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        name: '',
        bio: '',
      });
      const [errorMessage, setErrorMessage] = useState('');
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:5000/api/registry/register', formData);
          console.log(response.data);
          if (response.data.message === 'User registered successfully') {
            // Show a success alert
            alert('Registration successful');
            window.location.reload(); // This will refresh the page
          }
        } catch (error) {
          console.log(error);
          if (error.response) {
            
            setErrorMessage(error.response.data.message);
          } else {
            setErrorMessage('An error occurred. Please try again.');
          }
        }
      };
    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className="sign-up-form">
            <h4>Register Yourself on QuizFiesta</h4>
            <div className="group">
                <label htmlFor="user" className="label">Enter your Name</label>
                <input id="name" value={formData.name} onChange={handleChange} type="text" name="name" className="input" placeholder="Enter your username" />
            </div>
            <div className="group">
                <label htmlFor="username" className="label">Email Address</label>
                <input id="username" value={formData.username} onChange={handleChange} type="text" name="username" className="input" placeholder="Enter your email address" />
            </div>
            <div className="group">
                <label htmlFor="pass" className="label">Password</label>
                <input id="pass" value={formData.password} onChange={handleChange} type="password" name="password" className="input" data-type="password" placeholder="Create your password" />
            </div>
            <div className="group">
                <label htmlFor="pass" className="label">Repeat Password</label>
                <input id="pass" type="password" className="input" data-type="password" placeholder="Repeat your password" />
            </div>
            <div className="group">
                <label htmlFor="user" className="label">Tell us about yourself</label>
                <input id="bio" value={formData.bio} onChange={handleChange} type="text" name="bio" className="input" placeholder="Describe yourself" />
            </div>
            <div className="group">
                <input type="submit" className="button" value="Sign Up" />
            </div>
        </div>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        <p><a href="/login" style={{color:'white'}}>Have an Account!! Login here</a></p>
        </>
    )
}
export default RegisterForm