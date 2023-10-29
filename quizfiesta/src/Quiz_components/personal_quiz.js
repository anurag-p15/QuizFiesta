import React,{useEffect} from 'react'
import axios from 'axios'
import Navbar from '../components_home/navbar';
import Footer from '../components_home/footer';
import { useNavigate } from "react-router-dom";

function Personal_Quiz(){
    const navigate = useNavigate();
    const uusername = sessionStorage.getItem("lusername");
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Dashboard';
    
        // Check if the user is logged in
        if (!uusername) {
          // User is not logged in, redirect to the login page
          navigate("/login");
        }
      }, [navigate, uusername]);
    
    return(
        <>   
        <Navbar/>
        <div className='row'>
            <div className='col-md-6'>
        <div style={{color:'white',margin:'15% 20%'}}>
          <h1>Go back to Quiz Section</h1>
            <button style= {{backgroundColor: 'coral',color:'black'}} onClick={() => navigate('/attempt_quiz')}>Go Ahead to Personal Quiz</button>
          </div>
          </div>
          <div className='col-md-6'>
          <div style={{width:'100%',color:"white",margin:"5% 5%"}}>
            {/* Your content for the right side */}
            <h1>Attempt Personal Quiz</h1>
            <label style={{fontSize:'22px'}}>Enter quiz code </label><br/>
            <input id="code" style={{width:'60%'}} type="text" placeholder="Enter your code" name="code"/><br/>
            <button style={{backgroundColor: 'coral',color:'black'}} type="submit">Attempt Quiz</button>
          </div>
          </div>
        </div>
      <div className='rules'>
          <h1>Rules</h1>
          <div className='rulesContent'>
              <ol>
                  <li>You cannot change your selected option once selected</li>
                  <li>You can skip a question without answering but it will affect your score</li>
                  <li>Each question has 1 point; correct answers earn points.</li>
                  <li>You cannot go back to any question</li>
                  <li>You can re-attempt the quiz once completed</li>
              </ol>
          </div>
      </div><Footer />
      </>

    )
}
export default Personal_Quiz