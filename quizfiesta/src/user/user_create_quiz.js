import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import QuizForm from './quiz'
import Navbar from '../components_home/navbar'
import Footer from '../components_home/footer'
function CreateQuiz(){
    const navigate = useNavigate();
    const uusername = sessionStorage.getItem("lusername");
    useEffect(() => {
        // Set the title for the Home page
        document.title = 'Create your Quiz';
    
        // Check if the user is logged in
        if (!uusername) {
          // User is not logged in, redirect to the login page
          navigate("/login");
        }
      }, [navigate, uusername]);
      
    return(
        <div>
        <Navbar />
        <div className="row">
        <div className="box">
        <a href="/user_profile" style={{ textDecoration: 'none', color: 'inherit' }}>
             <div>
             <h5 style={{fontSize:'26px',fontWeight:'600'}}>
                Profile Management
                 </h5>
                 <p style={{fontSize:'18px',textAlign:'left'}}>
                 Manage your profile with ease. Customize and make it yours!
                 </p>
             </div>
             </a>
         </div>
         <div className="box">
         <a href="/attempt_quiz" style={{ textDecoration: 'none', color: 'inherit' }}>
             <div>
                 <h5 style={{fontSize:'26px',fontWeight:'600'}}>
                 Attempt a Quiz
                 </h5>
                 <p style={{fontSize:'18px',textAlign:'left'}}>
                 Ready to put your knowledge to the test? Go ahead, attempt a quiz and embrace the challenge!
                 </p>
             </div>
         </a>
         </div>
         <div className="box_selected">
         <a href="/user_create_quiz" style={{ textDecoration: 'none', color: 'inherit' }}>
             <div>
                 <h5 style={{fontSize:'26px',fontWeight:'600'}}>
                 Create A Quiz
                 </h5>
                 <p style={{fontSize:'18px',textAlign:'left'}}>
                 Browse your attempted quizzes. Refine your understanding and track your progress, look out for your mistakes and try again!
                 </p>
             </div>
         </a>
         </div>
         <div className="box">
         <a href="/user_attempt_quiz" style={{ textDecoration: 'none', color: 'inherit' }}>
             <div>
                 <h5 style={{fontSize:'26px',fontWeight:'600'}}>
                 Attempted Quizes
                 </h5>
                 <p style={{fontSize:'18px',textAlign:'left'}}>
                 Browse your attempted quizzes. Refine your understanding and track your progress, look out for your mistakes and try again!
                 </p>
             </div>  
         </a> 
     </div>
     </div>
        <QuizForm />
        <Footer />
        </div>
    )
}
export default CreateQuiz